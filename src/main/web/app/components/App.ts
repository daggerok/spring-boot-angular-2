import {Component} from 'angular2/core'

@Component({
  selector: 'angular2-typescript',
  styleUrls: [ 'app/components/App.css' ],
  template: `
<div class="container">
  <div class="containter-fluid">
    <div class="panel panel-heading">
      <h3 class="blue">angular 2 data binding</h3>
    </div>
    
    <br>
    <h4>two way data binding</h4>
    
    <div class="container">
      <div><input type="text" [(ngModel)]="name"></div>
      <div>{{name}}</div>
    </div>
    
    <br>
    <h4>event binding</h4>
    
    <div class="container">
      <div><input type="text" (keyup)="onKeyup(el.value)" #el></div>
      <div>{{values}}</div>
    </div>
    
    <br>
    <h4>property binding</h4>
    
    <div class="container">
      <div><input type="text" [value]="name" [disabled]="true"></div>
      <div><input type="text" [value]="name" [ngClass]="'mode'" [disabled]="'true'"></div>
      <div><input type="text" [value]="name" [ngClass]="{mode: true}"></div>
    </div>
    
    <br>
    <h4>string interpolation</h4>
    
    <div class="container">
      {{message}} {{name}} <span>this is <span class="{{'mode'}}">{{getMode()}}</span> mode.</span>
    </div>
  </div>
</div>
`
})
export class App {
  public name: string = 'Max'
  public message: string = 'holla'
  public values: string = ''

  public onKeyup(value: string) {
    this.values += value
  }

  public getMode = (): string => 'development'
}
