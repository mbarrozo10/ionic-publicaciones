import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionFeasPage } from './division-feas.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionFeasPage,
    children: [
      {
        path: 'estadisticas',
        loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
      },
      {
        path: 'profile-feas',
        loadChildren: () => import('./profile-feas/profile-feas.module').then( m => m.ProfileFeasPageModule)
      },
      {
        path: 'feas',
        loadChildren: () => import('./feas/feas.module').then( m => m.FeasPageModule)
      }]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionFeasPageRoutingModule {}
