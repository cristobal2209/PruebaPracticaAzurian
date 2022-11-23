package com.azurianbackend.proyecto1;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/agregar") 
    public ResponseEntity<Country> addCountry(@RequestBody Country country) {
        Country newCountry = countryService.addCountry(country);
        return new ResponseEntity<>(newCountry, HttpStatus.CREATED);
    }

    @PutMapping("/actualizar") 
    public ResponseEntity<Country> updateCountry(@RequestBody Country country) {
        Country updatedCountry = countryService.updateCountry(country);
        return new ResponseEntity<>(updatedCountry, HttpStatus.OK);
    }

    @DeleteMapping("/borrar/{id}") 
    public ResponseEntity<?> deleteCountry(@PathVariable("id") int id) {
        countryService.deleteCountry(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
