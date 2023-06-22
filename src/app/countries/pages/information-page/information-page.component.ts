import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {

  public termino:string = "Nombre de país"

  public country?:Country 

  constructor(private countriesservice: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router:Router){}

    ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap ( ({id})  => this.countriesservice.SearchId(id))
      )
        //El suscribe está suscrito al resultado del pipe anterior
      .subscribe( country => 
      {
        console.log(country)
        if (!country) return this.router.navigateByUrl('');
        return  this.country = country
      })
}}
