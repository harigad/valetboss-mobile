import {Component} from '@angular/core';
import {IonicPage, NavController,ViewController, NavParams} from 'ionic-angular'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserProvider} from "../../providers/user/user";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  formCheckin: FormGroup;

  public mobile;
  public admin:any = 0;
  public name;
  public errorCode:boolean = false;
  public user:any = {};

  constructor
  (public navCtrl: NavController,
   public navParams: NavParams,
   public viewCtrl: ViewController,
   public formbuilder: FormBuilder,
   private userProvider: UserProvider
  ) {
    this.formCheckin = formbuilder.group({
      mobile: ['', Validators.required],
      name: ['', Validators.required]
    });
    this.user = this.navParams.get('user') || {};
    this.admin = this.user.role == 1? 1 : 0;
  }

  ionViewDidLoad() {

    this.formCheckin = this.formbuilder.group({
      name: [this.user.name, Validators.required],
      mobile: [this.user.mobile, Validators.required]
    });

  }

  cancel() {
    this.viewCtrl.dismiss(false);
  }

  update() {
    if(this.formCheckin.valid) {
      this.errorCode = false;
      let user = {id:  null, mobile: '', name: '', role: 2};
      user.id = this.user.id;
      user.name = this.formCheckin.controls['name'].value;
      user.mobile = this.formCheckin.controls['mobile'].value;
      user.role = this.admin? 1 : 10;

      this.userProvider.update(user).subscribe((res: any[]) => {
        this.viewCtrl.dismiss(true);
      }, error => {
        console.log (error.error.code)
      });
    }else{
      this.errorCode = true;
    }
  }


}
