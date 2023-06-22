import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-name-page',
  templateUrl: './by-name-page.component.html',
  styleUrls: ['./by-name-page.component.css']
})
export class ByNamePageComponent {

  constructor(private countriesService: CountriesService){}

  public termino:string = "Nombre de país"

  public countries:Country[] = []
  
  searchByName(tipo: string, term:string):void{

    this.countriesService.Search(tipo, term)
    .subscribe(resp =>
      this.countries = resp)
  }
}
