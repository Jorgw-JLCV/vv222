
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PagLandingComponent } from './pag-landing/pag-landing.component';
import { PagServicioComponent } from './pag-servicio/pag-servicio.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RActividadComponent } from './r-actividad/r-actividad.component';
import { MatMenuModule } from '@angular/material/menu';
import { HistorialComponent } from './historial/historial.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ListaRecompensaComponent } from './lista-recompensa/lista-recompensa.component';
import { RComunidadComponent } from './r-comunidad/r-comunidad.component';





@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PagLandingComponent,
    PagServicioComponent,
 
    RActividadComponent,
    HistorialComponent,
    RegistroComponent,
    IniciarSesionComponent,
    ListaRecompensaComponent,
    RComunidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
