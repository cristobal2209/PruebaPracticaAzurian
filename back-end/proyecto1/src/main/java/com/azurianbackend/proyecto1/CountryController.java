package com.azurianbackend.proyecto1;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.azurianbackend.proyecto1.model.Country;
import com.azurianbackend.proyecto1.service.CountryService;

@RestController
@RequestMapping("/pais")
public class CountryController {
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Country>> getAllCountries () {
        List<Country> countries = countryService.getAllCountries();
        return new ResponseEntity<>(countries, HttpStatus.OK);
    }
}
