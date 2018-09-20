import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { FavoritePage } from '../pages/favorite/favorite';
import { ProductPage } from '../pages/product/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from '../Service/AppService';
import { HTTPService } from '../Service/HTTPService';
import { IonicNativeHTTPService } from '../Service/NativeHTTPService';
import { AngularHTTPService } from '../Service/AngularHTTPService';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FavoritePage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FavoritePage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    AppService,
    HttpClient,
    HTTPService,
    IonicNativeHTTPService,
    AngularHTTPService,
    HTTP,
    SQLite
  ]
})
export class AppModule {}
