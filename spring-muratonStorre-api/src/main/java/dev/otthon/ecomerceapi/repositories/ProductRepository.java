package dev.otthon.ecomerceapi.repositories;

import dev.otthon.ecomerceapi.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
