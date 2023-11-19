import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaproductosPageRoutingModule } from './listaproductos-routing.module';

import { ListaproductosPage } from './listaproductos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaproductosPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaproductosPage]
})
export class ListaproductosPageModule {}
