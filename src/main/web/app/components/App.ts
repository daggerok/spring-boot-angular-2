import {Component} from "angular2/core"
import NewComponent from "./app/NewComponent"

@Component({
  selector: 'angular2-typescript',
  template:
`
<h3>holala, Angular 2!</h3>
<new-component>hey!</new-component>
`,
  directives: [NewComponent]
})
export class App {}
