import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarprodPageRoutingModule } from './agregarprod-routing.module';

import { AgregarprodPage } from './agregarprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarprodPageRoutingModule
  ],
  declarations: [AgregarprodPage]
})
export class AgregarprodPageModule {}
