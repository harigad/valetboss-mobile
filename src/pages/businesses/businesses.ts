import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BuisnessProvider } from "../../providers/buisness/buisness";
import { BuisnessDetailsPage } from "../../pages/buisness-details/buisness-details";
import {getFromLocalStorage} from "../../utils/local-storage";

@IonicPage()
@Component({
  selector: "page-businesses",
  templateUrl: "businesses.html"
})
export class BusinessesPage {
  public businesses = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bs: BuisnessProvider
  ) {}

  ionViewDidLoad() {
    this.businesses = getFromLocalStorage('VB_USER').clients
  }

  pushBis(bisness){
    this.navCtrl.push(BuisnessDetailsPage, {business: bisness});
  }
}
