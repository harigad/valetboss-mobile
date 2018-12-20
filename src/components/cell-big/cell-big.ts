import {Component, Input} from '@angular/core';
import {NavController, ModalController} from "ionic-angular";
import {CheckoutPage} from "../../pages/checkout/checkout";

import {ParkingProvider} from "../../providers/parking/parking";
/**
 * Generated class for the CellBigComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cell-big',
  templateUrl: 'cell-big.html'
})

export class CellBigComponent {

  @Input() cell;
  @Input() ind;
  @Input() businessId;
  @Input() callBack;
  colors: any = ["#488aff","#3567c0"];

  constructor(public parking:ParkingProvider, public modalCtrl:ModalController) {

    
  }

  del(e) {
    if(e._openAmount < -200){
          this.cell.action = 4;
          this.parking.checkout(this.cell.shift, this.cell.checkin).subscribe((data) => {
            this.callBack();
          });
    }
  }

  pushCheckout() {
    let modal = this.modalCtrl.create(CheckoutPage,
        {
          checkout: this.cell,
          businessId: this.businessId
        }
    );
    modal.onDidDismiss(status => {
      if (status) {
        this.callBack();
      }
    });
    modal.present();
  }

}
