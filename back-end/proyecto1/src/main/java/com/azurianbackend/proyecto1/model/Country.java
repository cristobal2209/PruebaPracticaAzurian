package com.azurianbackend.proyecto1.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.*;

@Entity
public class Country implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int Id;
    private String name;
    private String president;
    private String continent;

    public Country() {
    }
    
    public Country(int Id, String name, String president, String continent) {
        this.Id = Id;
        this.name = name;
        this.president = president;
        this.continent = continent;
    }

    public int getId() {
        return Id;
    }

    public void setId(int Id) {
        this.Id = Id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPresident() {
        return president;
    }

    public void setPresident(String president) {
        this.president = president;
    }

    public String getContinent() {
        return continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    
}
