import {Component, Input, EventEmitter, Output} from 'angular2/core'
import {Item, Items} from './App/Item'
import {NewItemComponent} from './App/NewItemComponent'
import {EditItemComponent} from './App/EditItemComponent'
import {HeadComponent} from './App/HeadComponent'
import {ItemService} from './App/ItemService';

@Component({
  selector: 'app',
  template: `
<div class="container">
  <head-component></head-component>
  <new-item (itemAddedEvent)="onItemAdded($event)"></new-item>
  
  <section [hidden]="items().length < 1" class="listItems">
    <h5 class="panel-heading"></h5>
    <label>list items</label>
    <ul *ngFor="let item of items()">
      <li (click)="onSelectItem(item)">{{item.id}}: {{item.title}} - {{item.quantity}}</li>
    </ul>
  </section>
  
  <edit-item
    *ngIf="selectedItem != null"
    (itemDeletedEvent)="onItemDeleted($event)"
    (doneEvent)="onDone($event)"
    [item]="selectedItem"></edit-item>
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

  @Input('itemAddedEvent') private itemAddedEvent: EventEmitter<Item>
  @Input('itemDeletedEvent') private itemDeletedEvent: EventEmitter<Item> = new EventEmitter<Item>()

  constructor(private itemService: ItemService) {}

  public items = () => this.itemService.findAll()

  public onItemAdded = (item: Item) => this.itemService.save(item)

  public onItemDeleted(item: Item) {
    console.log('deleting', item)
    this.itemService.delete(item.id)
    this.selectedItem = this.items().length > 0 ? this.items()[0] : null
  }

  public onSelectItem = (item: Item) => this.selectedItem = item

  public onDone = (result: string) => this.selectedItem = null
}
