package fr.nuitdelinfo.api.service.impl;

import fr.nuitdelinfo.api.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class BaseServiceImpl implements BaseService {
    @Override
    public String getName() {
        return "BASE_SERVICE";
    }
}
