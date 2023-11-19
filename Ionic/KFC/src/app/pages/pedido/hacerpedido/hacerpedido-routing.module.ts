import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HacerpedidoPage } from './hacerpedido.page';

const routes: Routes = [
  {
    path: '',
    component: HacerpedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HacerpedidoPageRoutingModule {}
