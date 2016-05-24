import {Component} from 'angular2/core'
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {OneSub} from './One/OneSub'
import {OneMain} from './One/OneMain'

/**
 * Created by mak on 5/23/16.
 */
@Component({
  selector: 'one',
  template: `
<div class="container">
  <h4>component one</h4>
  <div (click)="onNavigate()">go to component Two</div>
  <ul>
    <li><a [routerLink]="['OneMain']">one/main</a></li>
    <li><a [routerLink]="['OneSub']">one/sub</a></li>
  </ul>
  <div class="panel">
    <router-outlet></router-outlet>
  </div>
</div>`,
  styles: [`
li {
  list-style: none;
}`],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'OneMain', component: OneMain, useAsDefault: true },
  { path: '/oneSub', name: 'OneSub', component: OneSub }
])
export class One {
  constructor(private router: Router) {}

  public onNavigate = () =>
    this.router.navigate(['Two', { src: 'One', optional: `${new Date().getSeconds() % 2 === 0 ? 'One' : ''}` }])
}
