/**
 * Created by mak on 5/15/16.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'child',
  inputs: [
    'childName: nameParam',
    'childAge: ageParam'
  ],
  template: `
  <div>
    child <span>{{childName}} {{childAge}} {{childMail}}</span>
    <!--<input type="text" #inputElem (keyup)="onHobbiesAreChanged(inputElem.value)">-->
    <input type="text" #inputElem (keyup)="onHobbiesAreChanged($event.target.value)">
    <button (click)="onClick(inputElem.value)">hobbies</button>
  </div>
  `
})
export class Child {
  public childName: string
  public childAge: number
  @Input('mailParam') public childMail: string
  @Output('hobbiesAreChangedEvent') public hobbiesAreChangedEvent: EventEmitter<string> = new EventEmitter<string>()
  public onHobbiesAreChanged = (inputHobbies: string) => this.hobbiesAreChangedEvent.emit(inputHobbies)
  public onClick = (hobbies: string) => alert(hobbies)
}
