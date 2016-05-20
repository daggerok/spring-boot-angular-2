import {Component} from 'angular2/core'
import {MessageComponent} from './App/MessageComponent'

@Component({
  selector: 'app',
  template: `
<div class="container">
  <h3 class="panel panel-heading blue">Angular 2 Services</h3>
  
  <section>
    <message></message>
  </section>
</div>
`,
  styles: [`
.blue {
  color: deepskyblue;
}
`],
  directives: [MessageComponent],
})
export class App {}
