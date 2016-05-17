import {Component, Output, EventEmitter, Input} from 'angular2/core'
import {Item} from './Item'

@Component({
  selector: 'head-component',
  template: `<div class="panel panel-heading blue text-lg">shopping list <span class="glyphicon glyphicon-ok" (click)="onClick()" *ngIf="selectedItem != null"></span></div>`,
  styles: [`
.blue {
  color: deepskyblue;
}
`],
})
export class HeadComponent {
  @Input('selectedItem') selectedItem: Item
  @Output('doneEvent') private doneEvent: EventEmitter<string> = new EventEmitter<string>()
  public onClick = () => {
    this.doneEvent.emit('done')
  }
}
