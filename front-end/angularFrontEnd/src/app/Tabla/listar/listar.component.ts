import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/Modelo/Pais';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent {
  paises: Pais[];

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getPaises().subscribe((data) => {
      this.paises = data;
    });
  }
}
