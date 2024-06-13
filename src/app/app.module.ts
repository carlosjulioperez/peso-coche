import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { IonicStorageModule } from '@ionic/storage-angular';
//import { IonicSelectableModule } from 'ionic-selectable';
import { IonicSelectableComponent } from 'ionic-selectable';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(), IonicSelectableComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
