import {Component} from 'angular2/core'
import {OddPipe, EvenPipe, IsEvenPipe, IsOddPipe} from './App/AppPipes'

@Component({
  selector: 'app',
  template: `
<div class="container-fluid">
  <h3 class="panel jumbotron blue">Angular 2 pipes</h3>

  <section class="row">
    <div class="panel panel-heading">
      <button type="button" class="btn btn-primary" (click)="reNew()">renew</button>
    </div>

    <section class="col-sm-6">
      <section>
        <div class="panel panel-heading">custom stateful (async) pipe</div>
  
        <label for="customStateful">input</label>
        <input name="customStateful" type="text" #customStateful (keyup)="0">
        <div>
          {{customStateful.value}} <span>is working... {{customStatefulPipe | async}}</span>
        </div>
      </section>
  
      <section >
        <div class="panel panel-heading">custom stateless (even/odd) pipe</div>
  
        <label for="customStateless">input</label>
        <input name="customStateless" type="text" #customStateless (keyup)="0">
        <div>{{customStateless.value | even}} is even: {{customStateless.value | isEven}}</div>
        <div>{{customStateless.value | odd}} is odd: {{customStateless.value | isOdd}}</div>
      </section>
  
      <section >
        read <a href="https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#filters-pipes" 
                class="href">this</a>
        and <a href="https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#filters-pipes" 
               class="href">this</a>
      </section>
  
      <section >
        <div class="panel panel-heading">number/currency pipe</div>
  
        <label for="num">input</label>
        <input name="num" type="number" #num (keyup)="0">
        <input name="cur" type="text" value="EUR" #cur (change)="0" min="3" minlength="3">
        <div>number: {{1.0 * num.value | number:'1.1-2'}}</div>
        <div>currency: {{1.0 * num.value | currency:cur.value:shorter.checked}}</div>
        <div>currency + number: {{1.0 * num.value | currency:cur.value:shorter.checked:'1.1-2'}}</div>
        <label for="shorter">shorter</label>
        <input type="checkbox" name="shorter" id="shorter" #shorter (change)="0">
      </section>
  
      <section >
        <div class="panel panel-heading">slice pipe</div>
  
        <label for="inp">input</label>
        <input name="inp" type="text" #inp (keyup)="0">
        <label for="from">from</label>
        <input name="from" type="number" #from (keyup)="0">
        <label for="to">to</label>
        <input name="to" type="number" #to (keyup)="0">
        <div>slice: {{inp.value | slice:from.value:to.value}}</div>
      </section>
  
      <section>
        <div class="panel panel-heading">lower/upper case pipe</div>
  
        <label for="caseIn"></label>
        <input name="caseIn" type="text" #caseIn (keyup)="0">
        <div>lowercase: {{caseIn.value | lowercase}}</div>
        <div>uppercase: {{caseIn.value | uppercase}}</div>
      </section>
    </section>

    <section class="col-sm-6">
      <section>
        <div class="panel panel-heading">date pipe</div>
  
        <div>json: <pre>{{today | json}}</pre></div>
      </section>
      
      <div class="panel panel-heading">date pipe</div>

      <div>today pattern is: <span class="grey">{{today}}</span></div>
      <div>today 'date' pattern is: <span class="grey">{{today | date}}</span></div>
      <div>same as 'longDate' pattern: <span class="grey">{{today | date:'longDate'}}</span></div>
      <div>today 'short' pattern is: <span class="grey">{{today | date:'short'}}</span></div>
      <div>custom date: <span class="grey">{{today | date:'yy/MM/dd'}}</span></div>
      <div>era 'G' --- 'GGGG' pattern is: <span class="grey">{{today | date:'G'}} --- {{today | date:'GGGG'}}</span></div>
      <div>year 'y' --- 'yy' pattern is: <span class="grey">{{today | date:'y'}} --- {{today | date:'yy'}}</span></div>
      <div>month 'MMM' --- 'MMMM' --- 'M' --- 'MM' pattern is:
        <span class="grey">
          {{today | date:'MMM'}} --- {{today | date:'MMMM'}} --- {{today | date:'M'}} --- {{today | date:'MM'}}
        </span>
      </div>
      <div>day 'd' --- 'dd' pattern is: <span class="grey">{{today | date:'Z'}}</span></div>
      <div>weekday 'E', 'EEE' --- 'EEEE' pattern is:
        <span class="grey">
          {{today | date:'E'}} --- {{today | date:'EEE'}} --- {{today | date:'EEEE'}}
        </span>
      </div>
      <div>hour 'j' --- 'jj' pattern is: <span class="grey">{{today | date:'j'}} --- {{today | date:'jj'}}</span></div>
      <div>hour12 'h' --- 'hh' pattern is: <span class="grey">{{today | date:'h'}} --- {{today | date:'hh'}}</span></div>
      <div>hour24 'H' --- 'HH' pattern is: <span class="grey">{{today | date:'H'}} --- {{today | date:'HH'}}</span></div>
      <div>minute 'm' --- 'mm' pattern is: <span class="grey">{{today | date:'m'}} --- {{today | date:'mm'}}</span></div>
      <div>second 's' --- 'ss' pattern is: <span class="grey">{{today | date:'s'}} --- {{today | date:'ss'}}</span></div>
      <div>timezone 'z' pattern is: <span class="grey">{{today | date:'z'}}</span></div>
      <div>timezone 'Z' pattern is: <span class="grey">{{today | date:'Z'}}</span></div>
    </section>
  </section>
</div>
`,
  styles: [`
.blue {
  color: deepskyblue;
}
.grey {
  color: darkgrey;
}
`],
  pipes: [OddPipe, EvenPipe, IsEvenPipe, IsOddPipe]
})
export class App {
  public static timeout: number = 2000

  private today: Date

  private customStatefulPipe: Promise<string>

  constructor() {
    this.reNew()
  }

  public reNew() {
    this.today = new Date()
    this.customStatefulPipe = new Promise((resolve, reject) =>
      setTimeout(() => resolve(`resolved at ${this.today}`), App.timeout))
  }
}
