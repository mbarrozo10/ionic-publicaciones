import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasPageRoutingModule } from './estadisticas-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { EstadisticasPage } from './estadisticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasPageRoutingModule,
    NgxChartsModule
  ],
  declarations: [EstadisticasPage]
})
export class EstadisticasPageModule {}
