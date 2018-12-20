import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BuisnessProvider } from "../../providers/buisness/buisness";
import { BusinessPage } from "../business/business";
import { ShiftPage } from "../shift/shift";
import {getFromLocalStorage} from "../../utils/local-storage";
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";
import { ClientPage } from '../../pages/client/client';
import { Events } from 'ionic-angular';
import { BuisnessDetailsPage } from "../buisness-details/buisness-details";

@IonicPage()
@Component({
  selector: "page-businesses",
  templateUrl: "businesses.html"
})
export class BusinessesPage {
  public businesses:any = [];
  private searchHistory:any = [];
  user:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bs: BuisnessProvider,
    private bp: BusinessDetailsProvider,
    public events: Events
  ) {
    this.load();
    this.user = getFromLocalStorage('VB_USER') || {};
  }

  load(){
    this.bp.getShifts().subscribe((shifts: any[]) => {
      this.businesses = this.searchHistory = shifts;
    });
  }

  add(){
    this.navCtrl.push(ShiftPage);
  }
  

  ionViewDidLoad() {

  }

  pushBis(bisness){
    if(this.user.role == 1){
      this.navCtrl.push(BuisnessDetailsPage, {business: bisness});
    }else{
      this.navCtrl.setRoot(BusinessPage, {business: bisness});
    }
  }

  onInput(e) {
    let mn = e.target.value;
    this.searchHistory = this.businesses.filter((res: any) => {
          return res.name.toLowerCase().indexOf(mn.toLowerCase()) > -1 ;
      }
    )
  }
}
