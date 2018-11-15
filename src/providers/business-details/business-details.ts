import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BusinessDetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BusinessDetailsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BusinessDetailsProvider Provider');
  }
  getDetailses() {
    return this.http.get("detailses");
  }

}
