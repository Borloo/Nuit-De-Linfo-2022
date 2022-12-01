package fr.nuitdelinfo.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1")
public interface BaseController {

    @GetMapping("/test")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    String test();

    @GetMapping("/error")
    String error();
}
