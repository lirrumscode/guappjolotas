import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleTamalesPage } from './single-tamales.page';

const routes: Routes = [
  {
    path: '',
    component: SingleTamalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleTamalesPageRoutingModule {}
