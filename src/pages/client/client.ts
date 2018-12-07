import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


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

  constructor
  (public navCtrl: NavController,
   public navParams: NavParams,
   public formbuilder: FormBuilder
  )
  {
    this.formClient = formbuilder.group({
      name: ['', Validators.required],
      addres: ['', Validators.required],
      valetPrice: ['', Validators.required],
      defaultPrice: ['', Validators.required],
      maxCars: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }

}
