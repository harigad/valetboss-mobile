import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";
import { ClientProvider } from '../../providers/client/client';
import {ClientPage} from "../client/client";

@IonicPage()
@Component({
  selector: 'page-buisness-details',
  templateUrl: 'buisness-details.html',
})
export class BuisnessDetailsPage {
  public detailses = [];
  public business: any = {};
  public client = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private bs: BusinessDetailsProvider,
      private clientService: ClientProvider) {
  }

  ionViewDidLoad() {
    this.business = this.navParams.get('business')
    this._loadData();
    this.clientService.getClient(this.business.id).subscribe((res: any[]) =>{
      this.client = res;
    })
  }

  viewSettings(){
    this.navCtrl.push(ClientPage, {business: this.client});
  }

  _loadData(){
    this.bs.getDashboard(this.business.id).subscribe((res: any[]) => {
      this.detailses = res;
      setTimeout(function(){
        this._loadData();
      }.bind(this),20000);
    },(err)=>{
      setTimeout(function(){
        this._loadData();
      }.bind(this),20000);
    });
  }

}
