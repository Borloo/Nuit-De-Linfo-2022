package fr.nuitdelinfo.api.service.impl;

import fr.nuitdelinfo.api.dto.ScoreDto;
import fr.nuitdelinfo.api.entity.Score;
import fr.nuitdelinfo.api.exception.BaseException;
import fr.nuitdelinfo.api.exception.InvalidScoreException;
import fr.nuitdelinfo.api.mapper.ScoreMapper;
import fr.nuitdelinfo.api.repository.ScoreRepository;
import fr.nuitdelinfo.api.service.ScoreService;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScoreServiceImpl implements ScoreService {

    private final ScoreMapper mapper = Mappers.getMapper(ScoreMapper.class);
    private final ScoreRepository repository;

    @Override
    public Iterable<Score> getScores() {
        return repository.findOrderedScorers();
    }

    @Override
    public Score createScore(ScoreDto scoreDto) {
        return Optional.of(scoreDto)
                .map(mapper::of)
                .filter(score -> score.getId() == null)
                .map(repository::save)
                .orElseThrow(() -> new InvalidScoreException("Invalid score"));
    }
}
