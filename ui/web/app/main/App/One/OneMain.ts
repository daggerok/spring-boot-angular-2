import {Component}  from 'angular2/core'
import {Router}     from 'angular2/router'

/**
 * Created by mak on 5/23/16.
 */
@Component({
  selector: 'oneMain',
  template: `
<div class="container panel">
  <h4 (click)="onNavigate()">component one/main</h4>
</div>`
})
export class OneMain {
  constructor(private router: Router) {}

  public onNavigate = () =>
    this.router.navigate(['Two', {src: 'One', optional: `${new Date().getSeconds() % 2 === 0 ? 'One' : ''}`}])
}
