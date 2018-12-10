import {Component, Input, OnInit} from '@angular/core';
import {IonicPage, NavController, ViewController, NavParams} from 'ionic-angular';
import {ParkingProvider} from "../../providers/parking/parking";
import {AlertController} from 'ionic-angular';

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

  constructor(
      public parking: ParkingProvider,
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      private alertCtrl: AlertController
  ) {
    this.checkout = this.navParams.get("checkout");
    this.businessId = this.navParams.get('businessId');
    debugger;
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
  }

  cancel() {
    this.viewCtrl.dismiss(false);
  }

  process() {
    this.parking.checkout(this.businessId, this.checkout.checkin).subscribe((data) => {
      this.viewCtrl.dismiss(true);
    }, (error) => {
      console.log(error.error.code)
    });
  }

}
