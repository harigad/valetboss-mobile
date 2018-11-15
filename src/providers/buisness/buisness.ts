import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the BuisnessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BuisnessProvider {
  constructor(public http: HttpClient) {
    console.log("Hello BuisnessProvider Provider");
  }

  getBuisnesses() {
    return this.http.get("businesses");
  }
}
