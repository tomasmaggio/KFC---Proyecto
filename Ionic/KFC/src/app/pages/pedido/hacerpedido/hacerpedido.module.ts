import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HacerpedidoPageRoutingModule } from './hacerpedido-routing.module';

import { HacerpedidoPage } from './hacerpedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HacerpedidoPageRoutingModule
  ],
  declarations: [HacerpedidoPage]
})
export class HacerpedidoPageModule {}
