import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth";
import {NumberConfirmationPage} from '../number-confirmation/number-confirmation'
import {getFromLocalStorage} from "../../utils/local-storage";
import {BusinessesPage} from "../businesses/businesses";


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
    const currentUser = getFromLocalStorage('VB_USER');
    if(currentUser && currentUser.token){
        this.navCtrl.setRoot(BusinessesPage,{},{animate:false}); 
    }else{
      this.ready = true;
    }

  }

  sendPhoneNumber(){
    console.log(this.phone);
    this.authProvider.sendPhoneNumber({phone: this.phone}).subscribe((res: any) => {
      if(res && res.status) {
        this.navCtrl.push(NumberConfirmationPage, {phone: this.phone});
      }
    }, (error => {
      console.log(error);
    }))
  }

}
