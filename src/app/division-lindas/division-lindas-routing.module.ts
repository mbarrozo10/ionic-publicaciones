import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionLindasPage } from './division-lindas.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionLindasPage, children: [
      {
        path: 'lindas',
        loadChildren: () => import('./lindas/lindas.module').then( m => m.LindasPageModule)
      },
      {
        path: 'estadisticas',
        loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
      },
      {
        path: 'profile-lindas',
        loadChildren: () => import('./profile-lindas/profile-lindas.module').then( m => m.ProfileLindasPageModule)
      }]
  },
  {
    path: 'profile-lindas',
    loadChildren: () => import('./profile-lindas/profile-lindas.module').then( m => m.ProfileLindasPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionLindasPageRoutingModule {}
