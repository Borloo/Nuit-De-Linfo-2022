package fr.nuitdelinfo.api.repository;

import fr.nuitdelinfo.api.entity.Entity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EntityRepository extends CrudRepository<Entity, Integer> {

    List<Entity> findEntitiesByEvilTrue();
}
