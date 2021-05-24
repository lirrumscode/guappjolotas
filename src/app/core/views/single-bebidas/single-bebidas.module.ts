import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleBebidasPageRoutingModule } from './single-bebidas-routing.module';

import { SingleBebidasPage } from './single-bebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleBebidasPageRoutingModule
  ],
  declarations: [SingleBebidasPage]
})
export class SingleBebidasPageModule {}
