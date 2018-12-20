import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, ModalController} from "ionic-angular";
import {BusinessComponent} from './../../components/business/business';

@IonicPage()
@Component({
  selector: "page-business",
  templateUrl: "business.html"
})
export class BusinessPage {
  pushPage1: any;
  pushPage2: any;
  shift:any = null;
  public cells = [];
  public business: any = {};

  constructor(
      public navParams: NavParams
  ) {

    this.business = this.navParams.get("business");

  }



}
