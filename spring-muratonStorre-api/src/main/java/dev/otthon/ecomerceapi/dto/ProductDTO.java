package dev.otthon.ecomerceapi.dto;

import dev.otthon.ecomerceapi.entities.Product;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Long id;

    @Size(min = 3, max = 100, message = "{field.size.min3.max100}")
    @NotEmpty(message = "{field.name.required}")
    private String name;

    @Size(min = 15, message = "{field.size.min15}")
    private String description;

    @Positive(message = "{field.price.positive}")
    private Double price;

    private String imgUrl;

    public ProductDTO(Product entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
        price = entity.getPrice();
        imgUrl = entity.getImgUrl();
    }

}
