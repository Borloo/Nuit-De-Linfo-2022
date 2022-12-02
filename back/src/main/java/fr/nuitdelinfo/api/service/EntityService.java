package fr.nuitdelinfo.api.service;

import fr.nuitdelinfo.api.entity.Entity;

public interface EntityService {

    Iterable<Entity> getEntities();

    Entity getRandomEntity();
}
