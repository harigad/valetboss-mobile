import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import  { BusinessesPage } from  "../../pages/businesses/businesses";
import {ClientProvider} from "../../providers/client/client";
import {ParkingProvider} from "../../providers/parking/parking";



/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {

  formClient: FormGroup;

  public errorCode:boolean = false;
  public client = [];

  constructor
  (public navCtrl: NavController,
   public navParams: NavParams,
   public formbuilder: FormBuilder,
   private clientService: ClientProvider,
   public viewCtrl: ViewController,
  )
  {
    this.formClient = formbuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      base: ['', Validators.required],
      tip: ['', Validators.required],
      min_ahead: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }
  back(){
    this.navCtrl.push(BusinessesPage);
  }
  addNewClient() {
    if (this.formClient.valid) {
      let client = {name: '', address: '', base: '', tip: '', min_ahead: ''};
      client.name = this.formClient.controls['name'].value;
      client.address = this.formClient.controls['address'].value;
      client.base = this.formClient.controls['base'].value;
      client.tip = this.formClient.controls['tip'].value;
      client.min_ahead = this.formClient.controls['min_ahead'].value;

      this.clientService.addClient(this.formClient.value).subscribe((res: any[]) => {
        this.client = res;
      }, error => {
        console.log (error.error.code)
      });
    }
    else{
      this.errorCode = true;
    }
  }

}
