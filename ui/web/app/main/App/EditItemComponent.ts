import {Component, Input, EventEmitter, Output, OnInit} from 'angular2/core'
import {Item, Items}                                    from './Item'
import {AppFormBuilder}                                 from './AppFormBuilder'
import {ControlGroup}                                   from 'angular2/common'

@Component({
  selector: 'edit-item',
  template: `
<section class="editItem">
  <h5 class="panel-heading">edit item</h5>
  
  <span class="glyphicon glyphicon-ok" (click)="onDone()"></span>
  
  <form [ngFormModel]="form" (onSubmit)="onSubmit()">
    <fieldset class="form-group">
      <label for="title">title</label>
      <input type="text" name="title" [(ngModel)]="item.title" [ngFormControl]="form.controls['title']">

      <label for="quantity">quantity</label>
      <input type="number" name="quantity" [(ngModel)]="item.quantity" [ngFormControl]="form.controls['quantity']">
    
      <button 
        class="btn btn-danger" 
        type="submit" (click)="onItemDeleted()"
        *ngIf="form.valid">delete</button>
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
}`]
})
export class EditItemComponent implements OnInit {
  private form: ControlGroup

  @Input('item') private item: Item = Items.empty()

  @Output('itemDeletedEvent') private itemDeletedEvent: EventEmitter<Item> = new EventEmitter<Item>()
  @Output('doneEvent') private doneEvent: EventEmitter<string> = new EventEmitter<string>()

  constructor(private appFormBuilder: AppFormBuilder) {}

  public ngOnInit() {
    this.form = this.appFormBuilder.build()
  }

  public onItemDeleted = () => this.itemDeletedEvent.emit(this.item)

  public onDone = () => this.doneEvent.emit('done')
}
