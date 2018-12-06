import {Component, Input} from '@angular/core';
import {NavController, ModalController} from "ionic-angular";
import {CheckoutPage} from "../../pages/checkout/checkout";

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

  constructor(public modalCtrl:ModalController) {

    
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
