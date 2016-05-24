import {Component}                                    from 'angular2/core'
import {Router, CanDeactivate, ComponentInstruction}  from 'angular2/router'

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
export class OneSub implements CanDeactivate {
  constructor(private router: Router) {}

  public routerCanDeactivate(nextInstruction: ComponentInstruction,
                             prevInstruction: ComponentInstruction): boolean|Promise<boolean> {

    console.log(`reactivating sub component: ${JSON.stringify(nextInstruction)}`)
    // true - continue route, false - stay
    return confirm('are u sure? we wanna make u see our ads, sry..')
  }
}
