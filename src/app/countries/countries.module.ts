import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ByNamePageComponent } from './pages/by-name-page/by-name-page.component';
import { ByMonedaPageComponent } from './pages/by-moneda-page/by-moneda-page.component';
import { ByLenguajePageComponent } from './pages/by-lenguaje-page/by-lenguaje-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByNamePageComponent,
    ByMonedaPageComponent,
    ByLenguajePageComponent,
    InformationPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class CountriesModule { }
