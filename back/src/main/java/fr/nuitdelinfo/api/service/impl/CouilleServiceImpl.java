package fr.nuitdelinfo.api.service.impl;

import fr.nuitdelinfo.api.entity.Couille;
import fr.nuitdelinfo.api.repository.CouilleRepository;
import fr.nuitdelinfo.api.service.CouilleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CouilleServiceImpl implements CouilleService {

    private final CouilleRepository repository;

    @Override
    public Iterable<Couille> getCouilles() {
        return repository.findAll();
    }
}
