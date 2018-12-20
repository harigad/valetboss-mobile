import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClientProvider} from "../../providers/client/client";
/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  clients:any = [];

  constructor(public clientProvider: ClientProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
  }

  edit(client){
  
  }

  load(){

    this.clientProvider.getClients().subscribe((data) => {
      this.clients = data;
    },(err) => {

    });

  }

  back() {
    this.navCtrl.pop();
  }

}
