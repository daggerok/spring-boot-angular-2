import {Component, EventEmitter, Output, OnInit}  from 'angular2/core'
import {Item, Items}                              from './Item'
import {ControlGroup}                             from 'angular2/common'
import {AppFormBuilder}                           from './AppFormBuilder'

@Component({
  selector: 'new-item',
  template: `
<section class="newItem">
  <h5 class="panel-heading">add new item</h5>
  
  <form [ngFormModel]="form" (onSubmit)="onSubmit()">
    <fieldset class="form-group">
      <label for="title">title</label>
      <input type="text" name="title" [(ngModel)]="item.title" autofocus [ngFormControl]="form.controls['title']">

      <label for="quantity">quantity</label>
      <input type="number" name="quantity" [(ngModel)]="item.quantity" [ngFormControl]="form.controls['quantity']">
    
      <button 
        class="btn btn-success"
        type="submit" (click)="onItemAdded()"
        *ngIf="form.valid">add</button>
    </fieldset>
    
    <fieldset class="form-group">
      <small class="text-muted red" *ngIf="!form.controls['title'].valid">title must be</small>
      <br>
      <small class="text-muted red" *ngIf="!form.controls['quantity'].valid">quantity must be greater then zero</small>
    </fieldset>
  </form>
</section>
`,
  providers: [AppFormBuilder],
  styles: [`
.red {
    color: orangered;
}
`]
})
export class NewItemComponent implements OnInit {
  private enterKeyCode: number = 13
  private item: Item = Items.empty()
  private form: ControlGroup

  @Output('itemAddedEvent') private itemAddedEvent: EventEmitter<Item> = new EventEmitter<Item>()

  constructor(private appFormBuilder: AppFormBuilder) {}

  public ngOnInit() {
    this.form = this.appFormBuilder.build()
  }

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
