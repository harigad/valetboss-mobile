import {Component} from '@angular/core';
import {IonicPage, NavController,ViewController, NavParams} from 'ionic-angular'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingProvider} from "../../providers/parking/parking";
import {BusinessPage} from "../business/business";

/**
 * Generated class for the CheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {

  formCheckin: FormGroup;

  public mobile;
  public ticket;
  public car;
  public errorCode:boolean = false;
  public client;
  public shift;
  public checkin = [];

  constructor
  (public navCtrl: NavController,
   public navParams: NavParams,
   public viewCtrl: ViewController,
   public formbuilder: FormBuilder,
   private parkingService: ParkingProvider
  ) {
    this.formCheckin = formbuilder.group({
      mobile: ['', Validators.required],
      ticket: ['', Validators.required]
    });
    this.client = this.navParams.get('client');
    this.shift = this.navParams.get('shift');
  }

  ionViewDidLoad() {
  }

  cancel() {
    this.viewCtrl.dismiss(false);
  }

  addNewCheckin() {
    if(this.formCheckin.valid) {
      this.errorCode = false;
      let checkin = {mobile: '', ticket: '', car: ''};
      checkin.mobile = this.formCheckin.controls['mobile'].value;
      checkin.ticket = this.formCheckin.controls['ticket'].value;
      checkin.car = null;//this.formCheckin.controls['car'].value;

      this.parkingService.addCheckin(this.client, this.shift, this.formCheckin.value).subscribe((res: any[]) => {
        this.checkin = res;
        this.viewCtrl.dismiss(true);
      }, error => {
        console.log (error.error.code)
      });
    }else{
      this.errorCode = true;
    }
  }


}
