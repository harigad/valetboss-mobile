import {Component, Input, OnInit} from "@angular/core";
import { NavController } from "ionic-angular";
import {CheckoutPage} from "../../pages/checkout/checkout";

@Component({
  selector: "cell",
  templateUrl: "cell.html"
})
export class CellComponent implements OnInit {
  @Input() cell;
  @Input() ind;

  constructor(
      public navCtrl: NavController
  ) {

  }

  ngOnInit() {
  }

  pushCheckout(){
    this.navCtrl.push(CheckoutPage);
  }
}
