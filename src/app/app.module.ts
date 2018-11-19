import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {PipesModule} from "../pipes/pipes.module";
import {AuthProvider} from "../providers/auth";
import {NumberConfirmationPageModule} from "../pages/number-confirmation/number-confirmation.module";
import {BusinessPageModule} from "../pages/business/business.module";
import {ParkingProvider} from "../providers/parking/parking";
import {PingvaletPageModule} from "../pages/businesses/businesses.module";
import {BuisnessDetailsPageModule} from "../pages/buisness-details/buisness-details.module";
import {BuisnessProvider} from "../providers/buisness/buisness";
import {BusinessDetailsProvider} from '../providers/business-details/business-details';
import {HttpInterceptorService} from '../providers/http-interceptor.service';
import { CheckinPageModule } from "../pages/checkin/checkin.module";
import { CheckoutPageModule } from "../pages/checkout/checkout.module";


@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpClientModule,
    NumberConfirmationPageModule,
    BusinessPageModule,
    PingvaletPageModule,
    BuisnessDetailsPageModule,
    CheckinPageModule,
    CheckoutPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ParkingProvider,
    BuisnessProvider,
    BusinessDetailsProvider,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  exports: []
})
export class AppModule {
}
