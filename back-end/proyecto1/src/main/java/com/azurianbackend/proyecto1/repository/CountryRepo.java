package com.azurianbackend.proyecto1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.azurianbackend.proyecto1.model.Country;

public interface CountryRepo extends JpaRepository<Country, Integer> {

}
