import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ParkingProvider } from "../../providers/parking/parking";
import { PingvaletPage } from "../businesses/businesses";

@IonicPage()
@Component({
  selector: "page-business",
  templateUrl: "business.html"
})
export class BusinessPage {
  pushPage1: any;
  pushPage2: any;
  public cells = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private parkingService: ParkingProvider
  ) {
    this.pushPage1 = BusinessPage;
    this.pushPage2 = PingvaletPage;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BusinessPage");
    let clientid = 1;
    this.parkingService.getParingCells(clientid).subscribe(
      (cells: any[]) => {
        this.cells = cells;
      },
      error => {
        this.cells = [
          { time: new Date(), identifier: "DJY7894", busy: false },
          { time: new Date(), identifier: "PXY7844", busy: true },
          { time: new Date(), identifier: "DTY7894", busy: false },
          { time: new Date(), identifier: "RJY7294", busy: true },
          { time: new Date(), identifier: "RJY7294", busy: false },
          { time: new Date(), identifier: "RJY7294", busy: true },
          { time: new Date(), identifier: "RJY7294", busy: false },
          { time: new Date(), identifier: "RJY7294", busy: true }
        ];
      }
    );
  }
}
