import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ParkingProvider {
  
  constructor(public http: HttpClient) {
  }

  getParingCells(client) {
    return this.http.get("https://valetboss-dev-api.herokuapp.com/dashboard/" + client);
  }
}
