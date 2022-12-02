package fr.nuitdelinfo.api.controller.impl;

import fr.nuitdelinfo.api.controller.BaseController;
import fr.nuitdelinfo.api.dto.ScoreDto;
import fr.nuitdelinfo.api.entity.Couille;
import fr.nuitdelinfo.api.entity.Entity;
import fr.nuitdelinfo.api.entity.Score;
import fr.nuitdelinfo.api.service.CouilleService;
import fr.nuitdelinfo.api.service.EntityService;
import fr.nuitdelinfo.api.service.ScoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BaseControllerImpl implements BaseController {

    private final CouilleService couilleService;
    private final EntityService entityService;
    private final ScoreService scoreService;

    @Override
    public Iterable<Couille> getCouilles() {
        return couilleService.getCouilles();
    }

    @Override
    public Iterable<Entity> getEntities() {
        return entityService.getEntities();
    }

    @Override
    public Iterable<Score> getScores() {
        return scoreService.getScores();
    }

    @Override
    public Score createScore(ScoreDto scoreDto) {
        return scoreService.createScore(scoreDto);
    }

    @Override
    public Entity getRandomEntity() {
        return entityService.getRandomEntity();
    }
}
