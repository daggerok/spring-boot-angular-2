import {Component} from 'angular2/core'

@Component({
  selector: 'head-component',
  template: `<h4 class="panel panel-heading blue text-lg">shopping list</h4>`,
  styles: [`
.blue {
  color: deepskyblue;
}
`],
})
export class HeadComponent {
}
