import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProximosComponent } from './pages/proximos/proximos.component';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './routing.module';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AboutUsComponent,
    ProximosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  exports: []
})
export class AboutModule { }
