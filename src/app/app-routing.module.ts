import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./customers/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./core/views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'single/:id',
    loadChildren: () => import('./core/views/single/single.module').then( m => m.SinglePageModule)
  },
  {
    path: 'single/bebidas/:id',
    loadChildren: () => import('./core/views/single-bebidas/single-bebidas.module').then( m => m.SingleBebidasPageModule)
  },
  {
    path: 'single/tamales/:id',
    loadChildren: () => import('./core/views/single-tamales/single-tamales.module').then( m => m.SingleTamalesPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./core/views/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./core/views/pay/pay.module').then( m => m.PayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
