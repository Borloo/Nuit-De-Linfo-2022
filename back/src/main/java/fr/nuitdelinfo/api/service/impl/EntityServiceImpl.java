package fr.nuitdelinfo.api.service.impl;

import fr.nuitdelinfo.api.entity.Entity;
import fr.nuitdelinfo.api.repository.EntityRepository;
import fr.nuitdelinfo.api.service.EntityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EntityServiceImpl implements EntityService {

    private final EntityRepository repository;

    @Override
    public Iterable<Entity> getEntities() {
        return repository.findAll();
    }
}
