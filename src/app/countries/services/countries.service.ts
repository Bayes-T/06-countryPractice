import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Country } from '../interfaces/countries.interface';
import { catchError, Observable, of, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

    public URL:string = "https://restcountries.com/v3.1"
    constructor(private http: HttpClient) { }

    Search(tipo:string,term:string):Observable<Country[]> {
     
        //me da error porque estoy diciendo que responda la api con un objeto cuando la funcion devuelve un array
        return this.http.get<Country[]>(`${this.URL}/${tipo}/${term}`)
        .pipe(
            catchError( error => of([]))
        )
       
    }

    //aca toca colocar o null, o no sirve
    //si coloco o null en el anterior no sirve!??

    SearchId(id:string):Observable<Country | null>{
        return this.http.get<Country[]>(`${this.URL}/alpha/${id}`)
        .pipe(
            map(
                countries => countries.length > 0 ? countries[0] : null
            ),
            catchError(error => of(null))
        )
    }
    
}

