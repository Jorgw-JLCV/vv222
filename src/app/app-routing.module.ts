import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagLandingComponent } from './pag-landing/pag-landing.component';
import { RActividadComponent} from './r-actividad/r-actividad.component'
import { HistorialComponent } from './historial/historial.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ListaRecompensaComponent } from './lista-recompensa/lista-recompensa.component';
import { RComunidadComponent } from './r-comunidad/r-comunidad.component';
const routes: Routes = [

  {
    path:'',
    component:PagLandingComponent,
    pathMatch:'full'
  },
  {
    path:'r-actividad',
    component:RActividadComponent,
    pathMatch:'full'
  },
  {
    path:'historial',
    component:HistorialComponent,
    pathMatch:'full'
  },
  {
    path:'registro',
    component:RegistroComponent,
    pathMatch:'full'
  },
  {
    path:'iniciarSesion',
    component:IniciarSesionComponent,
    pathMatch:'full'
  },
  {
    path:'lista-recompensa',
    component:ListaRecompensaComponent,
    pathMatch:'full'
  },
  {
    path:'r-comunidad',
    component:RComunidadComponent,
    pathMatch:'full'
  } 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
