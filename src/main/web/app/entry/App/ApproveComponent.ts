import {Component, Output, EventEmitter, Input} from 'angular2/core'
import {DTO, DTOs} from './DTO'

@Component({
  selector: 'approval',
  template: `
<div>
  <div class="panel panel-heading">
    <h4>approval</h4>
  </div>
  
  <section>
    <label for="name">will name: </label>
    <input id="name" type="text"
      [(ngModel)]="result.name"
      (keyup)="0"><br>
    
    <label for="age">will age: </label>
    <input id="age" type="number"
      [(ngModel)]="result.age"
      (keyup)="0"><br>
   
    <div>{{result.name}} {{result.age}}</div>
    <div>can be approve: {{isCanBeApproved()}}</div>
    
    <button type="button" class="btn btn-warning"
      [disabled]="!isCanBeApproved()"
      (click)="onResultApproved()">approve</button>
  </section>
</div>
`
})
export class ApproveComponent {
  @Input('result') public result: DTO = DTOs.empty()
  @Output('resultApprovedEvent') public resultApprovedEvent: EventEmitter<DTO> = new EventEmitter<DTO>()

  public onResultApproved = () => this.resultApprovedEvent.emit(this.result)
  public isCanBeApproved = (): boolean => DTOs.isValid(this.result)
}
