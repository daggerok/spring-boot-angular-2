import {Component} from 'angular2/core'
import {OddDirective} from './OddDirective';

@Component({
  selector: 'structural-directive',
  template: `
<div>
  <sectin>
    <h5>custom odd directive</h5>
    <label for="oddDirective">enter number</label>
    <input name="oddDirective" type="number" #n (keyup)="0">
    
    <span>
      <template [OddDirective]="n.value">you entered odd number</template>
    </span>
  </sectin>
  
  <section>
    <h5>*ngSwitch</h5>
    <label for="ngswitch">enter words</label>
    <input name="ngswitch" type="text" #ngswitch (keyup)="0">
    
    <span [ngSwitch]="ngswitch.value">
      <template [ngSwitchWhen] ="'apple'"><p>meal</p></template>
      <template [ngSwitchWhen]="'banana'"><p>meal</p></template>
      <template [ngSwitchWhen]="'audi'"><p>vehicle</p></template>
      <template [ngSwitchWhen]="'bmw'"><p>vehicle</p></template>
      <template ngswitchdefault><p>...default...</p></template>
    </span>
  </section>
  
  <section>
    <h5>*ngFor</h5>
    <label for="ngfor">enter text with spaces</label>
    <input type="text" #txt (keyup)="0">
    
    <span *ngIf="txt.value.length > 0">
      <ul *ngFor="let item of txt.value.split(' ')">
        <li class="zippy">{{item}} {{index}}</li>
      </ul>
    </span>
  </section>
  
  <section>
    <h5>*ngIf</h5>
    <div>enter number > 5 <input type="number" #num (keyup)="0"></div>
    <span *ngIf="num.value > 5">{{num.value}}</span>
  </section>
</div>
`,
  styles: [`
    li {
      list-style-type: none;
    }
  `],
  directives: [OddDirective]
})
export class StructuralDirective {}
