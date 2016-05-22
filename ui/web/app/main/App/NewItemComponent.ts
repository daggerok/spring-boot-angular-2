import {Component, EventEmitter, Output} from 'angular2/core'
import {Item, Items} from './Item'

@Component({
  selector: 'new-item',
  template: `
<section class="newItem">
  <h5 class="panel-heading">add new item</h5>
  
  <label for="title">title</label>
  <input type="text" name="title" [(ngModel)]="item.title" autofocus (keyup)="onEnter($event)" >
  
  <label for="quantity">quantity</label>
  <input type="number" name="quantity" [(ngModel)]="item.quantity" (keyup)="onEnter($event)" >
  
  <button class="btn btn-success" type="submit" (click)="onItemAdded()">add</button>
</section>
`
})
export class NewItemComponent {
  private enterKeyCode: number = 13
  private item: Item = Items.empty()

  @Output('itemAddedEvent') private itemAddedEvent: EventEmitter<Item> = new EventEmitter<Item>()

  public onEnter(event: KeyboardEvent) {
    if (event.which === this.enterKeyCode) {
      this.onItemAdded()
    }
  }

  public onItemAdded() {
    this.itemAddedEvent.emit(this.item)
    this.item = Items.empty()
  }
}
