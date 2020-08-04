import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatillosComponent } from './platillos/platillos.component';
import { RegistrarPlatilloComponent } from './registrar-platillo/registrar-platillo.component';
import { RegistrarAntojitoComponent } from './registrar-antojito/registrar-antojito.component';
import { ActualizarAntojitoComponent } from './actualizar-antojito/actualizar-antojito.component';
import { ActualizarPlatilloComponent } from './actualizar-platillo/actualizar-platillo.component';
import { AntojitosComponent } from './antojitos/antojitos.component';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [
    AntojitosComponent,
    PlatillosComponent,
    RegistrarPlatilloComponent,
    RegistrarAntojitoComponent,
    ActualizarAntojitoComponent,
    ActualizarPlatilloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule
  ],
  exports: [
    AntojitosComponent,
    PlatillosComponent,
    RegistrarPlatilloComponent,
    RegistrarAntojitoComponent,
    ActualizarAntojitoComponent,
    ActualizarPlatilloComponent
  ]
})
export class ComponentsModule { }
