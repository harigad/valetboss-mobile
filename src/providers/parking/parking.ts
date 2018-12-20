import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {appConfig} from '../../utils/app.config';

@Injectable()
export class ParkingProvider {

  apiUrl = appConfig.apiUrl;

  constructor(public http: HttpClient) {
  }

  getParingCells() {
    return this.http.get(appConfig.apiUrl + `/cells`);
  }

  addCheckin(id, shift, body){
    const params = new HttpParams()
        .set('mobile', body.mobile)
        .set('ticket', body.ticket);
    return this.http.post(appConfig.apiUrl + `/shifts/${shift}/checkin`, params);
  }

  checkout(shift, checkin){
    return this.http.post(appConfig.apiUrl + `/shifts/${shift}/checkout/${checkin}`, {});
  }
}

