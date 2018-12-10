import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BuisnessProvider } from "../../providers/buisness/buisness";
import { BusinessPage } from "../business/business";
import {getFromLocalStorage} from "../../utils/local-storage";
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";

@IonicPage()
@Component({
  selector: "page-businesses",
  templateUrl: "businesses.html"
})
export class BusinessesPage {
  public businesses:any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bs: BuisnessProvider,
    private bp: BusinessDetailsProvider
  ) {
    this.load();
  }

  load(){
    const currentUser = getFromLocalStorage('VB_USER');
    this.businesses = currentUser.clients;
      if(this.businesses.length == 1){
         this.pushBis(this.businesses[0]);
      }
  }
  

  ionViewDidLoad() {

  }

  pushBis(bisness){
    this.navCtrl.setRoot(BusinessPage, {business: bisness}, {animate: false});
  }
}
