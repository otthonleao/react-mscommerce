package dev.otthon.ecomerceapi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.Instant;

@Getter
@AllArgsConstructor
public class ErrorResponseDTO {

    private Instant timestamp;
    private Integer status;
    private String error;
    private String path;

}
