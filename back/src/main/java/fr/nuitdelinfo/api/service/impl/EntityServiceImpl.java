package fr.nuitdelinfo.api.service.impl;

import fr.nuitdelinfo.api.entity.Entity;
import fr.nuitdelinfo.api.repository.EntityRepository;
import fr.nuitdelinfo.api.service.EntityService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class EntityServiceImpl implements EntityService {

    private static final Random RANDOM = new Random();

    private final EntityRepository repository;

    @Override
    public Iterable<Entity> getEntities() {
        return repository.findAll();
    }

    @Override
    public Entity getRandomEntity() {
        List<Entity> entities = repository.findEntitiesByEvilTrue();

        if(entities.isEmpty()) {
            throw new EntityNotFoundException("Table entity has no evil..");
        }

        double sum = entities.stream().mapToDouble(Entity::getSpawnRate).sum();

        return entities.stream()
                .sorted(Comparator.comparing(Entity::getSpawnRate))
                .filter(entity -> entity.getSpawnRate() > (RANDOM.nextDouble() * sum))
                .findFirst()
                .orElse(entities.get(0));
    }
}
