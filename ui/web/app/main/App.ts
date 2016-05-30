import {Component}  from 'angular2/core'
import {UserForm}   from './App/UserForm'
import {MapObservable} from './App/MapObservable';

@Component({
  selector: 'app',
  template: `
<div class="container">
  <h3 class="panel panel-heading blue">Angular 2</h3>
</div>
<map-observablr></map-observablr>
<user-form class="grey"></user-form>
`,
  styles: [`
.blue {
  color: deepskyblue;
}
.grey {
  color: lightgrey;
}
`],
  directives: [
    UserForm,
    MapObservable
  ]
})
export class App {}
