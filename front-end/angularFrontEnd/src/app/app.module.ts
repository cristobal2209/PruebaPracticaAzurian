import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ListarComponent } from './Tabla/listar/listar.component';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [AppComponent, HomeComponent, ListarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
