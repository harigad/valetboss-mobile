import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {appConfig} from '../../utils/app.config';



@Injectable()
export class BuisnessProvider {

  apiUrl = appConfig.apiUrl;
  constructor(public http: HttpClient) {
    console.log("Hello BuisnessProvider Provider");
  }

  getBusinesses() {
    return this.http.get(appConfig.apiUrl + `/businesses`);
  }
}
