import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {appConfig} from '../../utils/app.config';


@Injectable()
export class BusinessDetailsProvider {

  apiUrl = appConfig.apiUrl;

  constructor(public http: HttpClient) {
    console.log('Hello BusinessDetailsProvider Provider');
  }

  getDetailses() {
    return this.http.get(`/apiUrl/details`);
  }

  getDashboard(id) {
    return this.http.get(`/apiUrl/dashboard/${id}`);
  }

}
