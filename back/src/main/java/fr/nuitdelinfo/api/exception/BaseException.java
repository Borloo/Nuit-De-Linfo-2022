package fr.nuitdelinfo.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class BaseException extends RuntimeException {

    public BaseException(String message) {
        super(message);
    }
}
