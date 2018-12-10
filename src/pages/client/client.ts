import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import  { BusinessesPage } from  "../../pages/businesses/businesses";
import {ClientProvider} from "../../providers/client/client";
import {ParkingProvider} from "../../providers/parking/parking";
import {BuisnessDetailsPage} from "./../buisness-details/buisness-details";



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
  public  business: any = {};

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
    this.business = this.navParams.get('business')[0];
    this.formClient = this.formbuilder.group({
      name: [this.business.name, Validators.required],
      address: [this.business.address, Validators.required],
      base: [this.business.base, Validators.required],
      tip: [this.business.tip, Validators.required],
      min_ahead: [this.business.min_ahead, Validators.required]
    });
  }
  back(){
    this.navCtrl.pop();
  }

  backHistory(){
    this.navCtrl.push(BuisnessDetailsPage, {business: this.business});
  }
  addNewClient() {
    if (this.formClient.valid) {
      this.clientService.saveClient(this.business.id, this.formClient.value).subscribe((res: any[]) => {
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

