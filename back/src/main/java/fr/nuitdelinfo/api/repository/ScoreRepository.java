package fr.nuitdelinfo.api.repository;

import fr.nuitdelinfo.api.entity.Score;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ScoreRepository extends CrudRepository<Score, Integer> {

    @Query(value = "SELECT *  FROM score WHERE (pseudo, val) IN " +
            "(SELECT DISTINCT pseudo, MAX(val) AS val FROM score GROUP BY pseudo ) ORDER BY val DESC", nativeQuery = true)
    Iterable<Score> findOrderedScorers();
}
