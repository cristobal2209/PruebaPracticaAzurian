import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListarComponent } from './Tabla/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }