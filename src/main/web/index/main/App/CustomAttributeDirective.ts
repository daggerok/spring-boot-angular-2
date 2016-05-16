import {Component} from 'angular2/core'
import {HighlightDirective} from './HighlightDirective'
import {JustHighlightDirective} from './JustHighlightDirective'
import {HostEventDirective} from './HostEventDirective'

@Component({
  selector: 'custom-attribute-directive',
  template: `
<div highlight-directive>
highlight me by default (color: blue, bgColor: yellow)
</div>
<section highlight-directive [highlightColor]="'red'" [highlightBgColor]="'grey'">
highlight me with color: red and bgColor: grey
</section>
<main [justHighlight]>
just highlight me by default with #ccc color
</main>
<aside [justHighlight]="'green'">
just don't highlight me with green color
</aside>
<p justHighlight>
just don't highlight me
</p>
<span [hostEventDirective]>host event directive</span>
<span [hostEventDirective]="'wrong'">hover me</span>
<span [hostEventDirective]="'blue'">and me</span>
`,
  directives: [
    HighlightDirective,
    JustHighlightDirective,
    HostEventDirective
  ]
})
export class CustomAttributeDirective {}
