import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRouting.module';
import { CountriesModule } from './countries/countries.module';
import { RouterModule } from '@angular/router'
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CountriesModule,
    AboutModule,
    AppRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
