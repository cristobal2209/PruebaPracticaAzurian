import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from '../Model/country';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public countries: Country[];
  public countryToDelete: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  public getCountries(): void {
    this.countryService.getCountries().subscribe(
      (response: Country[]) => {
        this.countries = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCountry(addForm: NgForm): void {
    this.countryService.addCountry(addForm.value).subscribe(
      (response: Country) => {
        console.log(response);
        this.getCountries();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteCountry(countryId: number): void {
    this.countryService.deleteCountry(countryId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCountries();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public setCountryToDelete(country: Country) {
    this.countryToDelete = country;
  }
}
