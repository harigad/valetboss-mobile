import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the ShiftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shift',
  templateUrl: 'shift.html',
})
export class ShiftPage {

  users:any = [];

  constructor(public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.userProvider.get().subscribe((users) => {
      this.users = users;
    },(err) => {

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShiftPage');
  }

}
