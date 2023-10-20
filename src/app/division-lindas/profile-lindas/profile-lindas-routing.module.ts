import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileLindasPage } from './profile-lindas.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileLindasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileLindasPageRoutingModule {}
