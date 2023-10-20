import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionLindasPageRoutingModule } from './division-lindas-routing.module';

import { DivisionLindasPage } from './division-lindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionLindasPageRoutingModule
  ],
  declarations: [DivisionLindasPage]
})
export class DivisionLindasPageModule {}
