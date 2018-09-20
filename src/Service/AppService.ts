import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTPService } from './HTTPService';
import { User } from '../Model/user';

@Injectable()
export class AppService {
  private urlApi: string = 'http://localhost:51259/api/';
    constructor(public storage: Storage, private httpService: HTTPService) {
    }

    saveDataStories(stories: any){
        this.storage.set('stories',JSON.stringify(stories));
    }

    getProduct(){
     let url = this.urlApi + 'product/' + "?MinInPrice=0&MaxInPrice=10000" + "&PageSize=" + 10 + "&Page=" + 1;;
     return this.httpService.http.get(url);
    }
    getCategories(){
      let url = this.urlApi + 'category/';
        return this.httpService.http.get(url);
    }

      registerAccount(user: User){
        let url = this.urlApi + 'user/'
        return this.httpService.http.post(url, user);
      }
      
      // fetchCategories() {
    //     let categories : Categories[];
    //     if (this.getCategories()) {
    //       this.getCategories().then((categories) => {
    //         if (categories) {
    //           categories = JSON.parse(categories);
    //         } else
    //         {
    //           this.httpService.http.get('/assets/data/stories.json').map(res => res.json()).subscribe(data => {
    //             categories = data.categories;
    //             this.saveDataCategories(categories);
    //           });
    //         }
    //         return categories;
    //       });
    //     } else
    //     {
    //       this.httpService.http.get('/assets/data/stories.json').map(res => res.json()).subscribe(data => {
    //         categories = data.categories;
    //         this.saveDataCategories(categories);
    //       });
    //       return categories;
    //     }
    //   }

    //   fetchStories() {
    //       let stories: Stories[];
    //     if (this.getStories()) {
    //       this.getStories().then((stories) => {
    //         if (stories) {
    //           stories = JSON.parse(stories);
    //         } else
    //         {
    //           this.httpService.http.get('/assets/data/stories.json').map(res => res.json()).subscribe(data => {
    //             stories = data.stories;
    //             this.saveDataStories(stories);
    //           });
    //         }
    //       });
    //     } else
    //     {
    //       this.httpService.http.get('/assets/data/stories.json').map(res => res.json()).subscribe(data => {
    //         stories = data.stories;
    //         this.saveDataStories(stories);
    //       });
    //     }
    //     return stories;
    //   }

}