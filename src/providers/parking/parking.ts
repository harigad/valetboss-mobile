import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ParkingProvider {
  constructor(public http: HttpClient) {}

  getParingCells() {
    return this.http.get("/cells");
  }
}
