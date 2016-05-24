import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {One} from './App/One'
import {Two} from './App/Two'

@Component({
  selector: 'app',
  template: `
<div class="container">
  <h3 class="panel panel-heading blue">Angular 2</h3>
  <ul>
    <li><a [routerLink]="['One']">One</a></li>
    <li><a [routerLink]="['Two', {src: 'App', optional: 'param was not passed'}]">Two</a></li>
  </ul>
  <div class="panel">
    <router-outlet></router-outlet>
  </div>
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
@RouteConfig([
  { path: '/one/...', name: 'One', component: One, useAsDefault: true },
  { path: '/two/:src', name: 'Two', component: Two }
])
export class App {}
