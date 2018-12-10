import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth";
import {BusinessPage} from '../business/business'
import {BusinessesPage} from "../businesses/businesses";
import {setToLocalStorage} from '../../utils/local-storage'

/**
 * Generated class for the NumberConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-number-confirmation',
  templateUrl: 'number-confirmation.html',
})
export class NumberConfirmationPage implements OnInit {

  @ViewChild('a') pin1;

  public pinForm: FormGroup;
  public wrongPin = false;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private fb: FormBuilder,
      private authProvider: AuthProvider
  ) {
  }

  ionViewDidLoad() {

    this.pin1.setFocus();

  }

  ngOnInit(): void {
    this.pinForm = this.fb.group({
      pin1: ['', Validators.required],
      pin2: ['', Validators.required],
      pin3: ['', Validators.required],
      pin4: ['', Validators.required]
    });
  }

 sentPin:any = "";
  sendPin() {
    this.wrongPin = false;
    const pin = this.pinForm.get('pin1').value + this.pinForm.get('pin2').value + this.pinForm.get('pin3').value + this.pinForm.get('pin4').value;

    if(pin !== this.sentPin){
    this.sentPin = pin;
    this.authProvider.sendPin({pin: pin, phone: this.navParams.get('phone')}).subscribe((res: any) => {
      setToLocalStorage('VB_USER', res);
      if (res.type == Array.isArray([])) {
        this.navCtrl.push(BusinessPage);
      } else {
        this.navCtrl.push(BusinessesPage);
      }


    }, error => {
      this.wrongPin = true;
      console.log(error)
    });
  }
  }

  moveFocus(currentelement, nextElement,move = true) {
    debugger;
    if (currentelement.value && move) {
      nextElement.setFocus();
    }

    debugger;
    if(this.pinForm.valid){
      this.sendPin();
    }

  }

}
