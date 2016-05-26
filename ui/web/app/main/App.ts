import {Component}  from 'angular2/core'
import {UserForm}   from './App/UserForm'

@Component({
  selector: 'app',
  template: `
<div class="container">
  <h3 class="panel panel-heading blue">Angular 2</h3>
</div>
<user-form></user-form>
`,
  styles: [`
.blue {
  color: deepskyblue;
}
`],
  directives: [UserForm]
})
export class App {}
