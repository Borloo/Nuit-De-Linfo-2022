package fr.nuitdelinfo.api.mapper;

import fr.nuitdelinfo.api.exception.handler.CustomErrorResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.http.HttpStatus;

@Mapper
public interface ExceptionMapper {

    @Mapping(target = "status", expression = "java(httpStatus.value())")
    @Mapping(target = "error", expression = "java(httpStatus.getReasonPhrase())")
    CustomErrorResponse of(HttpStatus httpStatus, String message, String path);
}
