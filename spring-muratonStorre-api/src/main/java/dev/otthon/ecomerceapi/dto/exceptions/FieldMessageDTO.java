package dev.otthon.ecomerceapi.dto.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class FieldMessageDTO {

    private String fieldName;
    private String message;

}
