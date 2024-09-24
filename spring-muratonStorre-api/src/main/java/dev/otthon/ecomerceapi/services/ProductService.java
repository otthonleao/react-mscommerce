package dev.otthon.ecomerceapi.services;

import dev.otthon.ecomerceapi.dto.ProductDTO;
import dev.otthon.ecomerceapi.entities.Product;
import dev.otthon.ecomerceapi.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


}
