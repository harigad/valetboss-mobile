import {Component, ViewChild} from "@angular/core";
import {Platform,  Nav, MenuController} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import { Events } from 'ionic-angular';

import {getFromLocalStorage} from "../utils/local-storage";
import {HomePage} from "../pages/home/home";
import {ClientPage} from "../pages/client/client";
import {BusinessPage} from "../pages/business/business";

@Component({
  templateUrl: "app.html"
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  clients:any = [];
  clientPage = ClientPage;
  constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      public menuCtrl: MenuController,
      public events: Events

  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.load();
    });

    this.events.subscribe("user:loggedin", () => {
      this.load();
    });

  }

  load(){
    const currentUser = getFromLocalStorage('VB_USER');
    if(currentUser) this.clients = currentUser.clients;
  }

  edit(e,client){
    e.stopPropagation();
    let current = this.nav.getActive();
    if(current.data.business && current.component.name == "ClientPage"){
      if(current.data.business.id !== client.id){
        this.nav.push(ClientPage,{business:client});
      }
    }else{
      this.nav.push(ClientPage,{business:client});
    }
    this.menuCtrl.close();
  }

  openPage(client){
    let current = this.nav.getActive();
    if(current.data.business && current.component.name == "BusinessPage"){
      if(current.data.business.id !== client.id){
        this.nav.push(BusinessPage,{business:client});
      }
    }else{
      this.nav.push(BusinessPage,{business:client});
    }
    this.menuCtrl.close();
  }

  newClient(){
    this.nav.push(ClientPage);
    this.menuCtrl.close();
  }
}
