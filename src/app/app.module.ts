import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntojitosComponent } from './components/antojitos/antojitos.component';
import { GestionAntojitosComponent } from './pages/gestion-antojitos/gestion-antojitos.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { RegistrarPlatilloComponent } from './components/registrar-platillo/registrar-platillo.component';
import { RegistrarAntojitoComponent } from './components/registrar-antojito/registrar-antojito.component';
import { ActualizarAntojitoComponent } from './components/actualizar-antojito/actualizar-antojito.component';
import { ActualizarPlatilloComponent } from './components/actualizar-platillo/actualizar-platillo.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    AntojitosComponent,
    GestionAntojitosComponent,
    AntojitosComponent,
    PlatillosComponent,
    RegistrarPlatilloComponent,
    RegistrarAntojitoComponent,
    ActualizarAntojitoComponent,
    ActualizarPlatilloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
