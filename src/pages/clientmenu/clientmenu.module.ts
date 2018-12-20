import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientmenuPage } from './clientmenu';

@NgModule({
  declarations: [
    ClientmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientmenuPage),
  ],
})
export class ClientmenuPageModule {}
