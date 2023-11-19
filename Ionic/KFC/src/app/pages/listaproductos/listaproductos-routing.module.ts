import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaproductosPage } from './listaproductos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaproductosPage
  },
  {
    path: 'listaproductos',
    loadChildren: () => import('./listaproductos/listaproductos.module').then( m => m.ListaproductosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaproductosPageRoutingModule {}
