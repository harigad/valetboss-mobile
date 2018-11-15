import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuisnessDetailsPage } from './buisness-details';

@NgModule({
  declarations: [
    BuisnessDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuisnessDetailsPage),
  ],
})
export class BuisnessDetailsPageModule {}
