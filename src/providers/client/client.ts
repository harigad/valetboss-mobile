import {HttpClient, HttpParams} from '@angular/common/http';
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

  saveClient(body){
    const params = new HttpParams()
        .set('name', body.name)
        .set('address', body.address)
        .set('base', body.base)
        .set('tip', body.tip)
        .set('min_ahead', body.min_ahead)
    return this.http.post(appConfig.apiUrl + `/admin/client`, params);
  }

  getClient(id) {
    return this.http.get(appConfig.apiUrl + `/admin/client/${id}`);
  }
}
