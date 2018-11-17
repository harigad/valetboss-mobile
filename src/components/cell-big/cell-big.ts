import {Component, Input} from '@angular/core';

/**
 * Generated class for the CellBigComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cell-big',
  templateUrl: 'cell-big.html'
})
export class CellBigComponent {

  @Input() cell;
  @Input() ind;

  constructor() {

  }

}
