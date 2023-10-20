import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
  //   path: 'lindas',
  //   loadChildren: () => import('../lindas/lindas.module').then( m => m.LindasPageModule)
  // }, {
    path: 'division-lindas',
    loadChildren: () => import('../division-lindas/division-lindas.module').then( m => m.DivisionLindasPageModule)
},{
    path: 'division-feas',
    loadChildren: () => import('../division-feas/division-feas.module').then( m => m.DivisionFeasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
