import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth";
import {NumberConfirmationPage} from '../number-confirmation/number-confirmation'
import {getFromLocalStorage} from "../../utils/local-storage";
import {BusinessesPage} from "../businesses/businesses";
import {BusinessPage} from "../business/business";

import {setToLocalStorage} from '../../utils/local-storage'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public phone;
  ready:any = false;

  constructor(
      public navCtrl: NavController,
      private authProvider: AuthProvider,
      public menuCtrl: MenuController
  ) {

  }

  ngOnInit() {
    let currentUser = getFromLocalStorage('VB_USER');
    if(currentUser && currentUser.token){
        this.authProvider.refresh().subscribe((user: any) => {
            setToLocalStorage("VB_USER",user);
            this.navCtrl.setRoot(BusinessesPage,{},{animate:false});
        });
    }else{
      this.ready = true;
    }
  }

  onChange($event){
    this.phone = $event || "";
    if(this.phone .replace(/\D/g, '').length == 10){
      this.sendPhoneNumber();
    }
  }

  sendPhoneNumber(){
    this.authProvider.sendPhoneNumber({phone: this.phone}).subscribe((res: any) => {
      if(res && res.status) {
        this.navCtrl.push(NumberConfirmationPage, {phone: this.phone});
      }
    }, (error => {
      console.log(error);
    }))
  }

}
