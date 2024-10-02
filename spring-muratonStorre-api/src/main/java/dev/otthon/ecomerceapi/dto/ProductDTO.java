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

    @Size(min = 3, max = 100, message = "O nome do produto deve ter entre 3 e 100 caracteres")
    @NotEmpty(message = "Campo obrigatório")
    private String name;

    @Size(min = 15, message = "A descrição do produto deve ter no mínimo 15 caracteres")
    private String description;

    @Positive(message = "O preço do produto deve ser um valor positivo")
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
