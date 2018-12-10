import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuisnessDetailsPage } from './buisness-details';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    BuisnessDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuisnessDetailsPage),
    ComponentsModule
  ],
})
export class BuisnessDetailsPageModule {}
