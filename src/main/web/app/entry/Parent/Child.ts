/**
 * Created by mak on 5/15/16.
 */
import {Component, Input} from 'angular2/core'

@Component({
  selector: 'child',
  inputs: [
    'childName: nameParam',
    'childAge: ageParam'
  ],
  template: `
  <div>
    child <span>{{childName}} {{childAge}} {{childMail}}</span>
  </div>
  `
})
export class Child {
  public childName: string
  public childAge: number
  @Input('mailParam') public childMail: string
}
