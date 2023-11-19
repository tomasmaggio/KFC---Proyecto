import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaproductosPageRoutingModule } from './listaproductos-routing.module';

import { ListaproductosPage } from './listaproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaproductosPageRoutingModule
  ],
  declarations: [ListaproductosPage]
})
export class ListaproductosPageModule {}
