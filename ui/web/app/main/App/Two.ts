import {Component, OnInit}  from 'angular2/core'
import {RouteParams}        from 'angular2/router'

/**
 * Created by mak on 5/23/16.
 */
@Component({
  selector: 'two',
  template: `
<div class="container">
  <h4>component two</h4>
  <div class="container">
    back to the {{src}} component <span *ngIf="optional">with {{optional}}</span>
  </div>
</div>
`
})
export class Two implements OnInit {
  private src: string
  private optional: string

  constructor(private routeParams: RouteParams) {}

  public ngOnInit() {
    this.src = this.routeParams.get('src')
    this.optional = this.routeParams.get('optional')
  }
}
