import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileFeasPageRoutingModule } from './profile-feas-routing.module';

import { ProfileFeasPage } from './profile-feas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileFeasPageRoutingModule
  ],
  declarations: [ProfileFeasPage]
})
export class ProfileFeasPageModule {}
