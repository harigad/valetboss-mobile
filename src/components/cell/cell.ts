import {Component, Input, OnInit} from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import {CheckoutPage} from "../../pages/checkout/checkout";
// import { JSONP_ERR_NO_CALLBACK } from "@angular/common/http/src/jsonp";

@Component({
  selector: "cell",
  templateUrl: "cell.html"
})
export class CellComponent implements OnInit {
  @Input() cell;
  @Input() ind;
  @Input() businessId;
  @Input() callBack;

  constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController
  ) {

  }

  ngOnInit() {
  }

  pushCheckout(){
    let modal = this.modalCtrl.create(CheckoutPage,{checkin: this.cell, businessId: this.businessId});
    modal.onDidDismiss(status => {
      // this.callBack();
      if(status){
       //refresh
      }
    });
    modal.present();
  }
}
