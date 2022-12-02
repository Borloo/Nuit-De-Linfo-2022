package fr.nuitdelinfo.api.mapper;

import fr.nuitdelinfo.api.dto.ScoreDto;
import fr.nuitdelinfo.api.entity.Score;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface ScoreMapper {

    @Mapping(target = "id", ignore = true)
    Score of(ScoreDto scoreDto);
}
