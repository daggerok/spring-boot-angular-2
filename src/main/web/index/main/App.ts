import {Component, Input, EventEmitter, Output} from 'angular2/core'
import {Item, Items} from './App/Item'
import {NewItemComponent} from './App/NewItemComponent'
import {EditItemComponent} from './App/EditItemComponent'
import {HeadComponent} from './App/HeadComponent'

@Component({
  selector: 'app',
  template: `
<div class="container">
  <head-component [selectedItem]="selectedItem" (doneEvent)="onDone($event)"></head-component>
  <new-item (itemAddedEvent)="onItemAdded($event)"></new-item>
  
  <section [hidden]="items.length < 1" class="listItems">
    <h5 class="panel-heading"></h5>
    <label>list items</label>
    <ul *ngFor="let item of items">
      <li (click)="onSelectItem(item)">{{item.title}}: {{item.quantity}}</li>
    </ul>
  </section>
  
  <edit-item *ngIf="selectedItem != null" (itemDeletedEvent)="onItemDeleted($event)" [item]="selectedItem"></edit-item>
</div>
`,
  styles: [`
li {
  list-style-type: none;
}
`],
  directives: [HeadComponent, NewItemComponent, EditItemComponent]
})
export class App {
  private selectedItem: Item
  private items: Array<Item> = new Array<Item>()
  @Input('itemAddedEvent') private itemAddedEvent: EventEmitter<Item>
  @Input('itemDeletedEvent') private itemDeletedEvent: EventEmitter<Item> = new EventEmitter<Item>()

  public onItemAdded(item: Item) {
    if (Items.isValid(item)) this.items.push(Items.clone(item))
  }

  public onItemDeleted(item: Item) {
    let index = this.items.indexOf(item, 0);

    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  public onSelectItem(item: Item) {
    this.selectedItem = item
  }

  public onDone = (result: string) => this.selectedItem = null
}
