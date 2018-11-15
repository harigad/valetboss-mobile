import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "cell",
  templateUrl: "cell.html"
})
export class CellComponent implements OnInit {
  @Input() cell;
  @Input() ind;

  constructor() {

  }

  ngOnInit() {
  }
}
