import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
    {path: "equipo",
    component: EquipoComponent, outlet: 'equipo'},
    {
        path: "proyectos",
        component: ProyectosComponent,
        outlet: 'proyectos'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AboutRoutingModule { }
