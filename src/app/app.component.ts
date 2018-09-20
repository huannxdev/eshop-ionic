import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AppService } from '../Service/AppService';
import { DatabaseProvider } from '../providers/database/database';
import { Categories } from '../Model/Categories';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  public categories: any[] = [];
  private databaseState = false;
  categoryDefault: Categories = {
    id: "e270b94e-aae6-4c79-a03c-77da72829bc1",
    name: "Giày Nam",
    description: "các mặt hàng giày nam nổi tiếng, bền và có giá cả hợp lí",
    status: 1
  }

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private service: AppService
    , private database: DatabaseProvider) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.database.getDatabaseState().subscribe((data) => {
        if(data){
          this.getCategory();
        }
      });
      this.database.connectToDb();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  filterStories(p: number) {
    this.nav.setRoot(HomePage, { id: p });
  }

  getCategory() {
    this.database.getCategory().then(data => {
      if (data) {
        if (data.rows.length > 0){
          for (let i = 0; i < data.rows.length; i++) {
            let item = data.rows.item(i);
            this.categories.push(item);
          }
        }
        else {
          this.database.addCategory(this.categoryDefault).then(data =>{
          });
          this.categories = [this.categoryDefault];
        }
      }
    });
  }
}
