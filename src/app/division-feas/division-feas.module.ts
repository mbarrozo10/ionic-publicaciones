import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionFeasPageRoutingModule } from './division-feas-routing.module';

import { DivisionFeasPage } from './division-feas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionFeasPageRoutingModule
  ],
  declarations: [DivisionFeasPage]
})
export class DivisionFeasPageModule {}
