import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  sendPhoneNumber(phone) {
    console.log('submiting');
    return this.http.post(`/apiUrl/login/mobile/${phone.phone.replace(/\D/g, '')}`, {});
  }

  sendPin(pin) {
    return this.http.post(`/apiUrl/login/verify/${pin.phone.replace(/\D/g, '')}/${pin.pin}`, {});
  }
}
