import {HttpClient, HttpParams} from "@angular/common/http";
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

  addCheckin(id, body){
    const params = new HttpParams()
        .set('mobile', body.mobile)
        .set('ticket', body.ticket)
        .set('car', null);

    return this.http.post(`/apiUrl/dashboard/${id}/checkin`, params);
  }
}

