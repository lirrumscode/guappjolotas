import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule],
  providers: [
  { 
  	provide: APP_BASE_HREF, useValue: '/' },
	{ provide: LocationStrategy, useClass: HashLocationStrategy },
  	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy 
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
