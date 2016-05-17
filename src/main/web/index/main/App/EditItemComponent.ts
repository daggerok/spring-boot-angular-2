import {Component, Input, EventEmitter, Output} from 'angular2/core'
import {Item, Items} from './Item'

@Component({
  selector: 'edit-item',
  template: `
<section class="editItem">
  <h5 class="panel-heading">edit item</h5>
  
  <label for="title">title</label>
  <input type="text" name="title" [(ngModel)]="item.title">
  
  <label for="quantity">quantity</label>
  <input type="number" name="quantity" [(ngModel)]="item.quantity">
  
  <button class="btn btn-danger" type="submit" (click)="onItemDeleted()">delete</button>
</section>
`
})
export class EditItemComponent {
  @Input('item') private item: Item = Items.empty()
  @Output('itemDeletedEvent') private itemDeletedEvent: EventEmitter<Item> = new EventEmitter<Item>()
  public onItemDeleted = () => this.itemDeletedEvent.emit(this.item)
}
