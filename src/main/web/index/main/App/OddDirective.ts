/**
 * Created by mak on 5/17/16.
 */
import {Directive, TemplateRef, ViewContainerRef} from 'angular2/core'

@Directive({
  selector: '[OddDirective]',
  inputs: ['OddDirective']
})
export class OddDirective {
  private wasOdd: boolean = false

  constructor(private tplRef: TemplateRef, private viewContainerRef: ViewContainerRef) {}

  public set OddDirective(input: number) {
    console.log(this.wasOdd)
    if (input % 2 !== 0) {
      this.handleOdd()
    } else {
      this.handleEven()
    }
    this.wasOdd = input % 2 !== 0
  }

  private handleOdd = () => { if (!this.wasOdd) { this.viewContainerRef.createEmbeddedView(this.tplRef) }}
  private handleEven = () => { if (this.wasOdd) { this.viewContainerRef.clear() }}
}
