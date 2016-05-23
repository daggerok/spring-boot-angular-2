/**
 * Created by mak on 5/23/16.
 */
import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
@Component({
  selector: 'one',
  template: `<h4>component one</h4>
<div (click)="onNavigate()">go to component Two</div>
`
})
export class One {
  constructor(private router: Router) {}

  public onNavigate = () =>
    this.router.navigate(['Two', {src: 'One', optional: `${new Date().getSeconds() % 2 === 0 ? 'One' : ''}`}])
}
