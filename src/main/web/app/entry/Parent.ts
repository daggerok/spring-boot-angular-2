import {Component, Output} from 'angular2/core'
import {Child} from './Parent/Child'

let isEmpty = (str: string): boolean => null == str || str.length < 1

@Component({
  selector: 'angular2-typescript',
  templateUrl: 'app/entry/Parent.html',
  styleUrls: [ 'app/entry/Parent.css' ],
  directives: [ Child ],
  outputs: [ 'ageParam: parentAge' ]
})
export class Parent {
  public parentName: string
  public parentAge: number
  @Output('mailParam') public parentMail: string
  public parentHobbies: string

  public ageIsHidden(): boolean {
    return isEmpty(this.parentName)
  }

  public mailIsHidden(): boolean {
    return this.ageIsHidden() || null == this.parentAge || this.parentAge < 1
  }

  public inProgress(): boolean {
    return this.ageIsHidden() || this.mailIsHidden() || isEmpty(this.parentMail)
  }
}
