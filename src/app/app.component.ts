import {Component, ViewChild} from "@angular/core";
import {Platform,  Nav, MenuController} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import { Events } from 'ionic-angular';

import {getFromLocalStorage} from "../utils/local-storage";
import {HomePage} from "../pages/home/home";
import {ClientPage} from "../pages/client/client";
import {BusinessPage} from "../pages/business/business";

import {EmployeesPage} from "../pages/employees/employees";
import {ClientsPage} from "../pages/clients/clients";

import {BusinessDetailsProvider} from "../providers/business-details/business-details";

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
      public events: Events,
      public ds: BusinessDetailsProvider

  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.events.subscribe("clients:loaded", (clients) => {
      this.clients = clients;
    });

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

  usersPage(){
    this.nav.push(EmployeesPage);
    this.menuCtrl.close();
  }

  clientsPage(){
    this.nav.push(ClientsPage);
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
