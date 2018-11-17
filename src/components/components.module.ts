import {NgModule} from "@angular/core";
import {CellComponent} from "./cell/cell";
import {CommonModule} from "@angular/common";
import {MomentModule} from "ngx-moment";
import {MenuComponent} from "./menu/menu";
import {IonicModule} from "ionic-angular";
import {CellBigComponent} from './cell-big/cell-big';
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [CellComponent, MenuComponent,
    CellBigComponent],
  imports: [CommonModule, MomentModule, IonicModule, PipesModule],
  exports: [CellComponent, CommonModule, MomentModule, MenuComponent,
    CellBigComponent, PipesModule]
})
export class ComponentsModule {
}
