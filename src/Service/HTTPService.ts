import { AngularHTTPService } from "./AngularHTTPService";
import { IonicNativeHTTPService } from "./NativeHTTPService";
import { Platform } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class HTTPService {
   public http: AngularHTTPService | IonicNativeHTTPService;
    constructor(private angularHttp: AngularHTTPService, private nativeHttp: IonicNativeHTTPService, public platform: Platform){
        this.http = this.platform.is('ios') || this.platform.is('android') ? this.nativeHttp : this.angularHttp;
    }
}