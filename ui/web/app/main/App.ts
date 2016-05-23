import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {One} from './App/One'
import {Two} from './App/Two'

@RouteConfig([
  { path: '/one', name: 'One', component: One },
  { path: '/two', name: 'Two', component: Two }
])
@Component({
  selector: 'app',
  template: `
<div class="container">
  <h3 class="panel panel-heading blue">Angular 2</h3>
  <ul>
    <li><a [routerLink]="['One']">One</a></li>
    <li><a [routerLink]="['Two']">Two</a></li>
  </ul>
  <router-outlet></router-outlet>
</div>
`,
  styles: [`
.blue {
  color: deepskyblue;
}
li {
  list-style-type: none;
}
`],
  directives: [ROUTER_DIRECTIVES]
})
export class App {}
