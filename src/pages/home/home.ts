import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx';
import { ProductPage } from '../product/product';
import { FavoritePage } from '../favorite/favorite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public idCategory: any;
  public productTab = ProductPage;
  public favoriteTab = FavoritePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionicViewDidLoad(){
    this.idCategory = this.navParams.get('id');
  }
}
