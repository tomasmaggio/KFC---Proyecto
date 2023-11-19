import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarprodPage } from './agregarprod.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarprodPage
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarprodPageRoutingModule {}
