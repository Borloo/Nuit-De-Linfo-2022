package fr.nuitdelinfo.api.service;

import fr.nuitdelinfo.api.dto.ScoreDto;
import fr.nuitdelinfo.api.entity.Score;

public interface ScoreService {

    Iterable<Score> getScores();

    Score createScore(ScoreDto scoreDto);
}
