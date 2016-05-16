/**
 * Created by mak on 5/17/16.
 */
import {Directive, ElementRef, OnInit, Renderer, Input} from 'angular2/core'

@Directive({
  selector: '[hostEventDirective]',
  host: {
    '(mouseenter)': 'onMouseIn()',
    '(mouseleave)': 'onMouseOut()',
  }
})
export class HostEventDirective implements OnInit {
  private defaultColor: string = 'grey'
  @Input('hostEventDirective') private hostEventDirective: string

  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  public ngOnInit() {
    this.setColor(this.hostEventDirective || 'orange')
  }

  public setColor(color: string) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', color || this.defaultColor)
  }

  public onMouseIn() {
    this.setColor('purple')
  }

  public onMouseOut() {
    this.setColor(this.defaultColor)
  }
}
