import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileFeasPage } from './profile-feas.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileFeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileFeasPageRoutingModule {}
