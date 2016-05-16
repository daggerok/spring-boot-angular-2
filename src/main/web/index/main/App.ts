import {Component} from 'angular2/core'
import {CustomAttributeDirective} from './App/CustomAttributeDirective'
import {StructuralDirective} from './App/StructuralDirective'

@Component({
  selector: 'app',
  styleUrls: [ './index/main/App.css' ],
  directives: [
    CustomAttributeDirective,
    StructuralDirective
  ],
  template: `
<div class="panel">
  <h3>attribute</h3>
  <custom-attribute-directive class="container panel"></custom-attribute-directive>
  <h3>structural</h3>
  <structural-directive></structural-directive>
</div>
`
})
export class App {}
