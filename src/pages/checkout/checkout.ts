import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import {ParkingProvider} from "../../providers/parking/parking";

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

  checkin:any = {};
  businessId:any = null;
  

  constructor(public parking: ParkingProvider, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.checkin = this.navParams.get("checkin");
    this.businessId = this.navParams.get('businessId');
  }

  ngOnInit() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  cancel(){
    this.viewCtrl.dismiss(false);
  }

  process(){
    debugger;
    this.parking.checkout(this.businessId, this.checkin.checkin ,{},"cash").subscribe((data) => {
      debugger;
      this.viewCtrl.dismiss(true);
    }, (error) => {
      debugger;
      console.log (error.error.code)
    });
    
  }

}
