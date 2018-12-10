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
    this.client = this.business;
    this._loadData();
  }

  showDate(i){
    let next = new Date(this.detailses[i].created);
    if(i==0){
      return next.toDateString();
    }else{
      let last = new Date(this.detailses[i-1].created);
      if(last.getDate() !== next.getDate()){
        return next.toDateString();
      }else{
        return false;
      }
    }
  }


  viewSettings(){
    this.navCtrl.push(ClientPage, {business: this.client});
  }

  _loadData(){
    this.bs.getHistory(this.business.id).subscribe((res: any[]) => {
      this.detailses = res;
    },(err)=>{
     
    });
  }

}
