import { Component, Input, OnInit } from "@angular/core";

/**
 * Generated class for the CellComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "cell",
  templateUrl: "cell.html"
})
export class CellComponent implements OnInit {
  @Input() cell;
  @Input() ind;

  constructor() {

  }

  ngOnInit() {}
}
