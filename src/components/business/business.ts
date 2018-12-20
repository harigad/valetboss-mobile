import {Component, Input} from "@angular/core";
import {IonicPage, NavController, NavParams, ModalController} from "ionic-angular";
import {ParkingProvider} from "../../providers/parking/parking";
import {BusinessesPage} from "../../pages/businesses/businesses";
import {BuisnessDetailsPage} from "./../../pages/buisness-details/buisness-details";
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";
import { CheckinPage } from "../../pages/checkin/checkin";
import { AlertController } from 'ionic-angular';
import { urlToNavGroupStrings } from "ionic-angular/umd/navigation/url-serializer";

@Component({
  selector: "business",
  templateUrl: "business.html"
})
export class BusinessComponent {
  pushPage1: any;
  pushPage2: any;
  shift:any = null;
  _error: any = "";
  public cells = [];
  @Input()business: any = {};

  constructor(
      public modalCtrl: ModalController,
      public navCtrl: NavController,
      public navParams: NavParams,
      private parkingService: ParkingProvider,
      private ds: BusinessDetailsProvider,
      public alert: AlertController
  ) {
  }

  ngOnInit() {
    this._loadData();
  }

  getReservations(): any {
    const result = this.cells.filter(cell => cell.action == 0);
    return result.length || 0;
  }

  getReadyForPickup(): any {
    const result = this.cells.filter(cell => cell.action == 2 || cell.action == 3);
    return result.length || 0;
  }

  details() {
    this.navCtrl.push(BuisnessDetailsPage, {business: this.business,shift:this.shift});
  }

  _loadData(startShift=false){
    this.ds.getDashboard(this.business.id,startShift,this.business.client).subscribe((res: any[]) => {
      this.cells = res;
      if(this.cells.length > 0){
        this.shift = this.cells[0].shift;
      }
      setTimeout(function(){
        this._loadData();
      }.bind(this),10000);
    },(err)=>{
      if(err.status == 409){
        this.startShift();
      }else{
        this._error = err.message;
      }
    });
  }

  startShift(){
    let alert = this.alert.create({
      title: 'NEW SHIFT',
      message: 'CLOCK IN @ ' + this.business.name,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.navCtrl.pop({animate:false});
          }
        },
        {
          text: 'START SHIFT',
          handler: () => {
            this._loadData(true);
          }
        }
      ]
    });
    alert.present();
  }

  back() {
    debugger;
    this.navCtrl.pop({animate:false});
  }

  newCheckin(){
    let modal = this.modalCtrl.create(CheckinPage,{client: this.business.id,shift: this.shift});
    modal.onDidDismiss(status => {
      if(status){
        this._loadData();
      }
    });
    modal.present();
  }
}
