package fr.nuitdelinfo.api.controller.impl;

import fr.nuitdelinfo.api.controller.BaseController;
import fr.nuitdelinfo.api.exception.BaseException;
import fr.nuitdelinfo.api.service.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class BaseControllerImpl implements BaseController {

    private final BaseService baseService;

    @Override
    public String test() {
        return baseService.getName();
    }

    @Override
    public String error() {
        throw new BaseException("Not implemented route..");
    }
}
