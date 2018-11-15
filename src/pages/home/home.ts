import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth";
import {NumberConfirmationPage} from '../number-confirmation/number-confirmation'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public phone;

  constructor(
      public navCtrl: NavController,
      private authProvider: AuthProvider
  ) {

  }

  ngOnInit() {

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
