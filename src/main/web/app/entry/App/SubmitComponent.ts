import {Component, EventEmitter, Output, Input} from 'angular2/core'
import {DTO, DTOs} from './DTO'

@Component({
  selector: 'submitter',
  template: `
<div>
  <div class="panel panel-heading">
    <h4>submitter</h4>
  </div>
  
  <section>
    <label for="name">will name: </label>
    <input id="name" type="text"
      [(ngModel)]="draft.name"
      (keyup)="0"><br>
    
    <label for="age">will age: </label>
    <input id="age" type="number"
      [(ngModel)]="draft.age"
      (keyup)="0"><br>
    
    <div>{{draft.name}} {{draft.age}}</div>
    <div>can be submitted: {{isCanBeSubmitted()}}</div>
    
    <button type="button" class="btn btn-warning"
      [disabled]="!isCanBeSubmitted()"
      (click)="onDraftSubmitted()">submit</button>
  </section>
</div>
`
})
export class SubmitComponent {
  @Input('draft') public draft: DTO = DTOs.empty()
  @Output('draftSubmittedEvent') public draftSubmittedEvent: EventEmitter<DTO> = new EventEmitter<DTO>()
  public submitted: boolean = false

  public onDraftSubmitted = () => this.draftSubmittedEvent.emit(this.draft)
  public isCanBeSubmitted = (): boolean => DTOs.isValid(this.draft)
}
