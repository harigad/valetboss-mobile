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


  constructor(
      public parking: ParkingProvider,
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      private alertCtrl: AlertController
  ) {
    this.checkout = this.navParams.get("checkout");
    this.businessId = this.navParams.get('businessId');
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  cancel() {
    this.viewCtrl.dismiss(false);
  }

  process() {
    let alert = this.alertCtrl.create({
      title: 'Confirm checkout',
      message: `Do you want make ${this.checkout.ticket} checkout for ?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.viewCtrl.dismiss(true);
          }
        },
        {
          text: 'Checkout',
          handler: () => {
            this.parking.checkout(this.businessId, this.checkout.checkout, {}, "cash").subscribe((data) => {
              this.viewCtrl.dismiss(true);
            }, (error) => {
              console.log(error.error.code)
            });
          }
        }
      ]
    });
    alert.present();



  }

}
