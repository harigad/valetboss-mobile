import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import { UserPage } from '../user/user';

/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {

  users:any = [];

  constructor(public modalCtrl: ModalController, public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.load();
  }

  load() {
    this.userProvider.get().subscribe((users) => {
      this.users = users;
    },(err) => {

    });
  }

  add(){
    this.edit({});
  }

  edit(user){
    let modal = this.modalCtrl.create(UserPage,{user: user});
    modal.onDidDismiss(status => {
      if(status){
        this.load();
      }
    });
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesPage');
  }

}
