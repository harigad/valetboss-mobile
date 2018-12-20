import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {appConfig} from '../../utils/app.config';


@Injectable()
export class BusinessDetailsProvider {

  apiUrl = appConfig.apiUrl;

  constructor(public http: HttpClient) {
    console.log('Hello BusinessDetailsProvider Provider');
  }

  getDashboard(shift,start=null,client=null) {
      if(start){
        return this.http.post(appConfig.apiUrl + `/shifts/start/${client}`,{});
      }else{
        return this.http.get(appConfig.apiUrl + `/shifts/${shift}`);
      }
  }

  
  getHistory(id,shift=null,checkin = null) {
    if(shift){
      return this.http.get(appConfig.apiUrl + `/shifts/history/${shift}`);
    }else if(checkin){
      return this.http.get(appConfig.apiUrl + `/shifts/history/checkin/${checkin}`);
    }
  }

  getShifts(){
    return this.http.get(appConfig.apiUrl + `/shifts/`);
  }

}
