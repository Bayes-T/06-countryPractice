import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-moneda-page',
  templateUrl: './by-moneda-page.component.html',
  styleUrls: ['./by-moneda-page.component.css']
})
export class ByMonedaPageComponent {

  constructor(private countriesService: CountriesService){}

  public termino:string = "Moneda del país"

  public countries:Country[] = []
  
  searchByName(tipo: string, term:string):void{

    this.countriesService.Search(tipo, term)
    .subscribe(resp =>
      this.countries = resp)
  }
}
