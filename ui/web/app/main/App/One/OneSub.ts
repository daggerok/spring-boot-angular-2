import {Component} from 'angular2/core'
import {Router} from 'angular2/router'

/**
 * Created by mak on 5/23/16.
 */
@Component({
  selector: 'oneSub',
  template: `
<div class="container">
  <h4>component one/Sub</h4>
</div>`
})
export class OneSub {
  constructor(private router: Router) {}
}
