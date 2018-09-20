import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
@Injectable()
export class IonicNativeHTTPService {
    constructor(private http: HTTP){

    }
    public get(url: string, params?: any, options: any = {}) {
        let responseData = this.http.get(url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }

    public post(url: string, body: any, options: any = {}){
        let responseData= this.http.post(url,body,options)
        .then(resp => options.responseType =='text'? resp.data: JSON.parse(resp.data));
        return Observable.fromPromise(responseData);
    }
}