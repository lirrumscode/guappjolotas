import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleTamalesPageRoutingModule } from './single-tamales-routing.module';

import { SingleTamalesPage } from './single-tamales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleTamalesPageRoutingModule
  ],
  declarations: [SingleTamalesPage]
})
export class SingleTamalesPageModule {}
