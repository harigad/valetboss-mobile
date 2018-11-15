import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class BuisnessProvider {
  constructor(public http: HttpClient) {
    console.log("Hello BuisnessProvider Provider");
  }

  getBusinesses() {
    return this.http.get("businesses");
  }
}
