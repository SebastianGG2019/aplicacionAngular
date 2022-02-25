import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { ApiComponent } from './components/api/api.component';


@NgModule({
  declarations: [
    EstadisticasComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule
  ]
})
export class EstadisticasModule { }
