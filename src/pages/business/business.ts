import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, ModalController} from "ionic-angular";
import {ParkingProvider} from "../../providers/parking/parking";
import {BusinessesPage} from "../businesses/businesses";
import {BuisnessDetailsPage} from "./../buisness-details/buisness-details";
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
      public modalCtrl: ModalController,
      public navCtrl: NavController,
      public navParams: NavParams,
      private parkingService: ParkingProvider,
      private ds: BusinessDetailsProvider
  ) {

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
    this._loadData();
    console.log(this.business);
  }

  details() {
    this.navCtrl.push(BuisnessDetailsPage, this.business);
  }

  _loadData(){
    this.ds.getDashboard(this.business.id).subscribe((res: any[]) => {
      this.cells = res;
      setTimeout(function(){
        this._loadData();
      }.bind(this),5000);
    },(err)=>{
      setTimeout(function(){
        this._loadData();
      }.bind(this),5000);
    });
  }

  newCheckin(){
    let modal = this.modalCtrl.create(CheckinPage,{id: this.business.id});
    modal.onDidDismiss(status => {
      if(status){
        this._loadData();
      }
    });
    modal.present();
  }
}
