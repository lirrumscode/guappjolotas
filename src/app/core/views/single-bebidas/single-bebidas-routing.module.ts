import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBebidasPage } from './single-bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: SingleBebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleBebidasPageRoutingModule {}
