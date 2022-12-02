package fr.nuitdelinfo.api.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ScoreDto {

    @Size(min = 4, max = 40)
    private String pseudo;

    @Positive
    private double val;
}
