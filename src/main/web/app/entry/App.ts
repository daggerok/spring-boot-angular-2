import {Component} from 'angular2/core'
import {SubmitComponent} from './App/SubmitComponent'
import {ApproveComponent} from './App/ApproveComponent'
import {DTO} from './App/DTO'

@Component({
  selector: 'app',
  directives: [
    SubmitComponent,
    ApproveComponent
  ],
  template: `
<div class="container">
  <div class="panel panel-heading">
    <h3>submit-approve application</h3>
  </div>
  
  <div class="container">
    <submitter
      (draftSubmittedEvent)="onDraftSubmitted($event)" 
      [draft]="draft"></submitter>

    <approval
      (resultApprovedEvent)="onResultApproved($event)"
      [result]="result"></approval>
  </div>
</div>
`
})
export class App {
  public draft: DTO = {name: null, age: null}
  public result: DTO = {name: null, age: null}

  public onDraftSubmitted(draftSubmittedEvent: DTO) {
    console.info('App.onDraftSubmitted', draftSubmittedEvent)
    this.convert(draftSubmittedEvent, this.result)
  }

  public onResultApproved(resultApprovedEvent: DTO) {
    console.info('App.onResultApproved', resultApprovedEvent)
    this.convert(resultApprovedEvent, this.draft)
    // cleanup
    resultApprovedEvent.name = null
    resultApprovedEvent.age = null
  }

  private convert(from: DTO, to: DTO) {
    to.name = from.name
    to.age = from.age
  }
}
