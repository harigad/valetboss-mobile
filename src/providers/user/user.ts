import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {appConfig} from "../../utils/app.config";
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  get(){
    return this.http.get(appConfig.apiUrl + `/users/`);
  }

  update(user){
    const params = new HttpParams()
    .set('name', user.name)
    .set('mobile', user.mobile)
    .set('role', user.role)
    .set('id', user.id);
    return this.http.post(appConfig.apiUrl + `/users/`,params);
  }

}
