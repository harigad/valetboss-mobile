import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumberConfirmationPage } from './number-confirmation';

@NgModule({
  declarations: [
    NumberConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(NumberConfirmationPage),
  ],
})
export class NumberConfirmationPageModule {}
