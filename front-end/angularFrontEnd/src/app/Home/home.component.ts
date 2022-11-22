import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from '../Model/country';
import { CountryService } from '../Service/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public countries: Country[];

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
}
