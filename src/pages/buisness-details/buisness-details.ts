import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";

/**
 * Generated class for the BuisnessDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buisness-details',
  templateUrl: 'buisness-details.html',
})
export class BuisnessDetailsPage {
  public detailses = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private bs: BusinessDetailsProvider) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('business'));

    this.bs.getDetailses().subscribe(
        (detailses: any[]) => {
          this.detailses = detailses;
        },
        error => {
          this.detailses = [
            { date: "Hotel ZaZa1", parkedTotal: 44},
            { date: "Hotel ZaZa2", parkedTotal: 54},
            { date: "Hotel ZaZa3", parkedTotal: 64},
            { date: "Hotel ZaZa4", parkedTotal: 84}
          ];
        }
    );
  }

}
