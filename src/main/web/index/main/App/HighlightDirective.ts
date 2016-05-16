/**
 * Created by mak on 5/17/16.
 */
import {Directive, ElementRef, OnInit, Renderer, Input} from 'angular2/core'

interface Colors {
  blue: string
  yellow: string
}

@Directive({
  selector: '[highlight-directive]'
})
export class HighlightDirective implements OnInit {
  private colors: Colors = {
    blue: 'blue',
    yellow: 'yellow'
  }
  @Input('highlightColor') private highlightColor: string = this.colors.blue
  @Input('highlightBgColor') private highlightBgColor: string = this.colors.yellow

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //console.log(elementRef.nativeElement)
  }

  public ngOnInit() {
    this.elementRef.nativeElement.style.color = this.highlightColor || this.colors.blue
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', this.highlightBgColor || this.colors.yellow)
  }
}
