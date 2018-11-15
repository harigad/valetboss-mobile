import { NgModule } from "@angular/core";
import { CellComponent } from "./cell/cell";
import { CommonModule } from "@angular/common";
import { MomentModule } from "ngx-moment";
import { MenuComponent } from "./menu/menu";
import { IonicModule } from "ionic-angular";

@NgModule({
  declarations: [CellComponent, MenuComponent],
  imports: [CommonModule, MomentModule, IonicModule],
  exports: [CellComponent, CommonModule, MomentModule, MenuComponent]
})
export class ComponentsModule {}
