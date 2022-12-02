package fr.nuitdelinfo.api.controller;

import fr.nuitdelinfo.api.dto.ScoreDto;
import fr.nuitdelinfo.api.entity.Couille;
import fr.nuitdelinfo.api.entity.Entity;
import fr.nuitdelinfo.api.entity.Score;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1")
public interface BaseController {

    @GetMapping("/couilles")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    Iterable<Couille> getCouilles();

    @GetMapping("/entities")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    Iterable<Entity> getEntities();

    @GetMapping("/scores")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    Iterable<Score> getScores();

    @PostMapping("/score")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    Score createScore(@Valid @RequestBody ScoreDto scoreDto);
}
