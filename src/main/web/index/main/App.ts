import {Component} from 'angular2/core'

@Component({
  selector: 'app',
  template: `
<div class="container">
  <h3 class="panel panel-heading blue">Angular 2</h3>
</div>
`,
  styles: [`
.blue {
  color: deepskyblue;
}
`]
})
export class App {}
