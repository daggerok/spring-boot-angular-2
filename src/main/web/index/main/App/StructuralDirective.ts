import {Component} from 'angular2/core'

@Component({
  selector: 'structural-directive',
  template: `
<div>
  <h5>*ngSwitch</h5>
  <label for="ngswitch">enter words</label>
  <input name="ngswitch" type="text" #ngswitch (keyup)="0">
  
  <span [ngSwitch]="ngswitch.value">
    <template [ngSwitchWhen] ="'apple'"><p>meal</p></template>
    <template [ngSwitchWhen]="'banana'"><p>meal</p></template>
    <template [ngSwitchWhen]="'audi'"><p>vehicle</p></template>
    <template [ngSwitchWhen]="'bmw'"><p>vehicle</p></template>
    <template ngswitchdefault><p>...</p></template>
  </span>
  
  <h5>*ngFor</h5>
  <label for="ngfor">enter text with spaces</label>
  <input type="text" #txt (keyup)="0">
  
  <span *ngIf="txt.value.length > 0">
    <ul *ngFor="let item of txt.value.split(' ')">
      <li class="zippy">{{item}} {{index}}</li>
    </ul>
  </span>
  
  <h5>*ngIf</h5>
  <div>enter number > 5 <input type="number" #num (keyup)="0"></div>
  <span *ngIf="num.value > 5">{{num.value}}</span>
</div>
`,
  styles: [`
    li {
      list-style-type: none;
    }
  `]
})
export class StructuralDirective {}
