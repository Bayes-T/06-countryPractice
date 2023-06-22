import { Component, Input } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/countries.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  public countries: Country[] = []
}
