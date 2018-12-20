import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {appConfig} from './../utils/app.config';
import {getFromLocalStorage} from "../utils/local-storage";

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  sendPhoneNumber(phone) {
    console.log('submiting ' + appConfig.apiUrl + `/login/mobile/${phone.phone.replace(/\D/g, '')}`);
    return this.http.post(appConfig.apiUrl + `/login/mobile/${phone.phone.replace(/\D/g, '')}`, {});
  }

  sendPin(pin) {
    return this.http.post(appConfig.apiUrl + `/login/verify/${pin.phone.replace(/\D/g, '')}/${pin.pin}`, {});
  }

  refresh() {
    const currentUser = getFromLocalStorage('VB_USER');
    if(currentUser && currentUser.token){
      return this.http.post(appConfig.apiUrl + `/refresh/`,{});
    }
  }
}
