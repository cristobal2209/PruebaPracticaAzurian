package com.azurianbackend.proyecto1.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.azurianbackend.proyecto1.model.Country;
import com.azurianbackend.proyecto1.repository.CountryRepo;

@Service
public class CountryService {
    private final CountryRepo countryRepo;

    @Autowired
    public CountryService(CountryRepo countryRepo) {
        this.countryRepo = countryRepo;
    }

    //recuperar todos los paises
    public List<Country> getAllCountries() {
        return countryRepo.findAll();
    }
}
