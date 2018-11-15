import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class BusinessDetailsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BusinessDetailsProvider Provider');
  }

  getDetailses() {
    return this.http.get("details");
  }

}
