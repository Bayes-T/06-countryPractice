import { Component, ElementRef, EventEmitter, Output, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input()
  public busqueda!:string 

  @ViewChild("usuarioBusqueda")
  public elemento!:ElementRef<HTMLInputElement>

  public termino!:string

  @Output() onSearch:EventEmitter<string> = new EventEmitter
  search():void{
    this.termino = this.elemento.nativeElement.value
    this.onSearch.emit(this.termino)
    console.log("Desde searchBox")
  }
  

}
