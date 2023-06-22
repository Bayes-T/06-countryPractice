import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about/pages/about-us/about-us.component';
import { ByLenguajePageComponent } from './countries/pages/by-lenguaje-page/by-lenguaje-page.component';
import { ByMonedaPageComponent } from './countries/pages/by-moneda-page/by-moneda-page.component';
import { ByNamePageComponent } from './countries/pages/by-name-page/by-name-page.component';
import { InformationPageComponent } from './countries/pages/information-page/information-page.component';
import { AboutModule } from './about/about.module';
import { EquipoComponent } from './about/components/equipo/equipo.component';

const routes:Routes= [
    {path: 'home',
    component: AboutUsComponent
    },
    {path: 'country',
    component: ByNamePageComponent
    },
    {path: 'currency',
    component: ByMonedaPageComponent
    },
    {path: 'language',
    component: ByLenguajePageComponent
    },
    {path: 'info/:id',
    component: InformationPageComponent
    },
    {path: "equipo",
    component: EquipoComponent, outlet: 'equipo'},
    {path: '**',
    component: AboutUsComponent
    },

]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
