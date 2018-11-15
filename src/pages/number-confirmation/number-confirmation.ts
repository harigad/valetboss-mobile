import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth";
import {BusinessPage} from '../business/business'
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

  @ViewChild('pn1') pin1: ElementRef;
  @ViewChild('pn2') pin2: ElementRef;
  @ViewChild('pn3') pin3: ElementRef;
  @ViewChild('pn4') pin4: ElementRef;
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

  }

  ngOnInit(): void {
    this.pinForm = this.fb.group({
      pin1: ['', Validators.required],
      pin2: ['', Validators.required],
      pin3: ['', Validators.required],
      pin4: ['', Validators.required]
    })
  }

  sendPin() {
    this.wrongPin = false;
    const pin = this.pinForm.get('pin1').value + this.pinForm.get('pin2').value + this.pinForm.get('pin3').value + this.pinForm.get('pin4').value;
    this.authProvider.sendPin({pin: pin, phone: this.navParams.get('phone')}).subscribe((res: any) => {
      setToLocalStorage('VB_USER', res);
      this.navCtrl.push(BusinessPage);
    }, error => {
      this.wrongPin = true;
      console.log(error)
    })
  }

}
