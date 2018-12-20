import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";
import { ClientProvider } from '../../providers/client/client';
import {ClientPage} from "../client/client";
import { CheckoutPage } from '../checkout/checkout';
import { UserPage } from '../user/user';

import {getFromLocalStorage} from "../../utils/local-storage";

@IonicPage()
@Component({
  selector: 'page-buisness-details',
  templateUrl: 'buisness-details.html',
})
export class BuisnessDetailsPage {
  public detailses = [];
  public business: any = {};
  public client:any = {};
  searchHistory:any = [];
  shift:any = null;
  myInput:any = "";
  employees:any = [];
  user:any;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private bs: BusinessDetailsProvider,
      private clientService: ClientProvider,
      public modalCtrl:ModalController) {
        this.user = getFromLocalStorage("VB_USER");
  }

  ionViewDidLoad() {
    this.business = this.navParams.get('business')
    this.client = this.business;
    this.shift = this.client.id;
    this._loadData();
  }

  goToUser(e){
    this.navCtrl.push(UserPage, {user:e});
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
  

  go(checkout) {
    let modal = this.modalCtrl.create(CheckoutPage,
        {
          checkout: checkout,
          businessId: this.business.id
        }
    );
    modal.onDidDismiss(status => {
      if (status) {
        this._loadData();
      }
    });
    modal.present();
  }


  viewSettings(){
    this.navCtrl.push(ClientPage, {business: this.client});
  }

  _loadData(){
    this.bs.getHistory(this.business.id,this.shift).subscribe((res: any) => {
      this.detailses = this.searchHistory = res.history;
      this.business = res.shift;
      this.employees = res.employees;
    },(err)=>{

    });
  }

  onInput(e) {
    let status = {
      1: "parked",
      10: "requested",
      20: "released"
    }
    let mn = e.target.value;
    this.searchHistory = this.detailses.filter((res: any) => {
          return res.mobile.toLowerCase().indexOf(mn.toLowerCase()) > -1 ||
              (res.ticket+'').indexOf(mn.toLowerCase()) > -1 ||
              (res.action+'').indexOf(mn.toLowerCase()) > -1 ||
              (res.name+'').indexOf(mn.toLowerCase()) > -1 ||
              (res.mobile+'').indexOf(mn.toLowerCase()) > -1 ||
              (status[res.action]).indexOf(mn.toLowerCase()) > -1
              ;
        }
    )
  }

}
