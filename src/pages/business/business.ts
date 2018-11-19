import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {ParkingProvider} from "../../providers/parking/parking";
import {BusinessesPage} from "../businesses/businesses";
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";
import { CheckinPage } from "../checkin/checkin";

@IonicPage()
@Component({
  selector: "page-business",
  templateUrl: "business.html"
})
export class BusinessPage {
  pushPage1: any;
  pushPage2: any;
  public cells = [];
  public business: any = {};

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private parkingService: ParkingProvider,
      private ds: BusinessDetailsProvider
  ) {
    this.pushPage1 = BusinessPage;
    this.pushPage2 = BusinessesPage

  }

  getReservations(): any {
    const result = this.cells.filter(cell => cell.action == 0);
    return result.length || 0;
  }

  getReadyForPickup(): any {
    const result = this.cells.filter(cell => cell.action == 2 || cell.action == 3);
    return result.length || 0;
  }

  ionViewDidLoad() {
    if (this.navParams.get('business')) {
      this.business = this.navParams.get('business')
    } else {
      this.navCtrl.push(BusinessesPage)
    }

    this.ds.getDashboard(this.business.id).subscribe((res: any[]) => {
      this.cells = res;
    });
    console.log(this.business);
  }

  newCheckin(){
    this.navCtrl.push(CheckinPage, {id: this.business.id});
  }
}
