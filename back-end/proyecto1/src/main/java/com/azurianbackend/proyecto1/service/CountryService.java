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

    //crear pais
    public Country addCountry(Country country) {
        return countryRepo.save(country);
    }

    //recuperar todos los paises
    public List<Country> getAllCountries() {
        return countryRepo.findAll();
    }

    //actualizar pais
    public Country updateCountry(Country country) {
        return countryRepo.save(country);
    }

    //borrar pais
    public void deleteCountry(int id) {
        countryRepo.deleteCountryById(id);
    }

}
