package fr.nuitdelinfo.api.repository;

import fr.nuitdelinfo.api.entity.Entity;
import org.springframework.data.repository.CrudRepository;

public interface EntityRepository extends CrudRepository<Entity, Integer> {
}
