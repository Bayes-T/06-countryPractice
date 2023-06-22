import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-lenguaje-page',
  templateUrl: './by-lenguaje-page.component.html',
  styleUrls: ['./by-lenguaje-page.component.css']
})
export class ByLenguajePageComponent {

  constructor(private countriesService: CountriesService){}

  public termino:string = "Lenguaje del país"

  public countries:Country[] = []
  
  searchByName(tipo: string, term:string):void{

    this.countriesService.Search(tipo, term)
    .subscribe(resp =>
      this.countries = resp)
  }

}
