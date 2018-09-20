
import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class AngularHTTPService {
    constructor(private http: HttpClient){

    }
    public get(url: string, params?: any, options: any = {}) {
        options.params = params;
        options.withCredentials = true;

        return this.http.get(url, options);
    }

    public post(url: string, data: any, options?: any): Observable<any>{
        return (this.http.post(url, data, options));
    }
}