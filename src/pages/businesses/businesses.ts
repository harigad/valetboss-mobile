import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BuisnessProvider } from "../../providers/buisness/buisness";
import { BuisnessDetailsPage } from "../../pages/buisness-details/buisness-details";

/**
 * Generated class for the PingvaletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-businesses",
  templateUrl: "businesses.html"
})
export class PingvaletPage {
  public businesses = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bs: BuisnessProvider
  ) {}

  ionViewDidLoad() {
    this.bs.getBuisnesses().subscribe(
      (businesses: any[]) => {
        this.businesses = businesses;
      },
      error => {
        this.businesses = [
          { name: "Hotel ZaZa", parkedTotal: 44 },
          { name: "Clutch Bar", parkedTotal: 22 }
        ];
      }
    );
  }

  pushBis(bisness){
    this.navCtrl.push(BuisnessDetailsPage, {business: bisness});
  }
}
