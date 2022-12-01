package fr.nuitdelinfo.api.exception.handler;

import fr.nuitdelinfo.api.exception.BaseException;
import fr.nuitdelinfo.api.mapper.ExceptionMapper;
import org.mapstruct.factory.Mappers;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

    private final ExceptionMapper mapper = Mappers.getMapper(ExceptionMapper.class);

    /*
    Only when spring doesn't properly handle the exception
    @ResponseBody
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(BaseException.class)
    public CustomErrorResponse resolveBaseException(BaseException exception) {
        return mapper.of(HttpStatus.UNAUTHORIZED, exception.getMessage(), "/api/v1/error");
    }
    */
}
