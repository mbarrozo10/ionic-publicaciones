import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileLindasPageRoutingModule } from './profile-lindas-routing.module';

import { ProfileLindasPage } from './profile-lindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileLindasPageRoutingModule
  ],
  declarations: [ProfileLindasPage]
})
export class ProfileLindasPageModule {}
