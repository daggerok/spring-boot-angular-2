import {Component} from 'angular2/core'
import {TemplateDrivenForm} from "./App/TemplateDrivenForm";
import {ProgrammaticDrivenForm} from "./App/ProgrammaticDrivenForm";

@Component({
  selector: 'app',
  template: `
<div class="container">
  <h3 class="panel panel-heading blue">Forms in Angular 2</h3>
  <template-driven-form></template-driven-form>
  <programming-driven-form></programming-driven-form>
</div>
`,
  styles: [`
.blue {
  color: deepskyblue;
}
`],
  directives: [TemplateDrivenForm, ProgrammaticDrivenForm]
})
export class App {}
