import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {appConfig} from '../../utils/app.config';

@Injectable()
export class ParkingProvider {

  apiUrl = appConfig.apiUrl;

  constructor(public http: HttpClient) {
  }

  getParingCells() {
    return this.http.get(`/apiUrl/cells`);
  }
}
