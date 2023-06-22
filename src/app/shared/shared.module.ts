import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    SearchBoxComponent,
    SideBarComponent,
    HeaderComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent,
  SideBarComponent, SearchBoxComponent, TableComponent
]
})
export class SharedModule { }
