import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth";
import {NumberConfirmationPage} from '../number-confirmation/number-confirmation'
import {getFromLocalStorage} from "../../utils/local-storage";
import {BusinessDetailsProvider} from "../../providers/business-details/business-details";
import {BusinessPage} from "../business/business";
import {BusinessesPage} from "../businesses/businesses";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public phone;

  constructor(
      public navCtrl: NavController,
      private authProvider: AuthProvider,
      private bp: BusinessDetailsProvider,
      public menuCtrl: MenuController
  ) {

  }

  ngOnInit() {
    const currentUser = getFromLocalStorage('VB_USER');
    if(currentUser && currentUser.token){
      this.bp.getDashboard(currentUser.account).subscribe(res => {
        this.navCtrl.push(BusinessPage);
      }, error => {
        if (error.status !== 403){
          if(currentUser.clients.length === 1){
            this.navCtrl.push(BusinessPage);
          }
          else{
            this.navCtrl.push(BusinessesPage);
          }

        }
        console.log(error.status);
      });
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
