import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {appConfig} from "../../utils/app.config";

/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ClientProvider Provider');
  }

  addClient(body){
    return this.http.put(appConfig.apiUrl + `/admin/client`, body);
  }
}
