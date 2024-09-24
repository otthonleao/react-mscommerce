package dev.otthon.ecomerceapi.services;

import dev.otthon.ecomerceapi.dto.ProductDTO;
import dev.otthon.ecomerceapi.entities.Product;
import dev.otthon.ecomerceapi.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public ProductDTO findById(Long id) {
        Optional<Product> result = productRepository.findById(id);
        Product product = result.get();
        ProductDTO dto = new ProductDTO(product) ;
        return dto;
    }

    @Transactional(readOnly = true)
    public Page<ProductDTO> findAll(Pageable pageable) {
        Page<Product> list = productRepository.findAll(pageable);
        return list.map(ProductDTO::new);
    }

    @Transactional
    public ProductDTO insert(ProductDTO dto) {

        Product entity = new Product();
        converterDtoToEntity(dto, entity);
        entity = productRepository.save(entity);

        return new ProductDTO(entity);
    }

    @Transactional
    public ProductDTO update(Long id, ProductDTO dto) {

        Product entity = productRepository.getReferenceById(id);
        converterDtoToEntity(dto, entity);
        entity = productRepository.save(entity);

        return new ProductDTO(entity);
    }

    private void converterDtoToEntity(ProductDTO dto, Product entity) {
        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setImgUrl(dto.getImgUrl());
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void delete(Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Product not found");
        }

        try {
            productRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new RuntimeException("Integrity violation. This product has associated orders");
        }

    }

}
