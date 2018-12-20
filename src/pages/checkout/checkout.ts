import {Component, Input, OnInit} from '@angular/core';
import {IonicPage, NavController, ViewController, NavParams} from 'ionic-angular';
import {ParkingProvider} from "../../providers/parking/parking";
import {AlertController} from 'ionic-angular';

import {BusinessDetailsProvider} from "../../providers/business-details/business-details";
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage implements OnInit {

  checkout: any = {};
  businessId: any = null;
  doCheckOut:any = 0;
  history:any = [];

  constructor(
      public parking: ParkingProvider,
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      private alertCtrl: AlertController,
      public bs:BusinessDetailsProvider
  ) {
    this.checkout = this.navParams.get("checkout");
    this.businessId = this.navParams.get('businessId');
    debugger;

    this._loadData();
  }

  ngOnInit() {
  }

  del(e) {
    if(e._openAmount < -200){
         this.process();
    }
  }


  showDate(i){
    let next = new Date(this.history[i].created);
    if(i==0){
      return next.toDateString();
    }else{
      let last = new Date(this.history[i-1].created);
      if(last.getDate() !== next.getDate()){
        return next.toDateString();
      }else{
        return false;
      }
    }
  }

  _loadData(){
    this.bs.getHistory(this.businessId,null,this.checkout.checkin || this.checkout.checkinid).subscribe((res: any) => {
      this.checkout = res.checkin;
      this.history = res.history;
    },(err)=>{
     
    });
  }

  ionViewDidLoad() {
  }

  cancel() {
    this.viewCtrl.dismiss(false);
  }

  process() {
    this.parking.checkout(this.checkout.shift, this.checkout.checkin).subscribe((data) => {
      this.viewCtrl.dismiss(true);
    }, (error) => {
      console.log(error.error.code)
    });
  }

}
