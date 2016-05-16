/**
 * Created by mak on 5/17/16.
 */
import {Directive, ElementRef, OnInit, Renderer, Input} from 'angular2/core'

@Directive({
  selector: '[justHighlight]'
})
export class JustHighlightDirective implements OnInit {
  @Input('justHighlight') private justHighlight: string = '#ccc'

  constructor(private elementRef: ElementRef) {}

  public ngOnInit() {
    this.elementRef.nativeElement.style.color = this.justHighlight
  }
}
