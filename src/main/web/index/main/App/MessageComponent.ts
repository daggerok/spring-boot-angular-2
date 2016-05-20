/**
 * Created by mak on 5/20/16.
 */
import {Component} from 'angular2/core'
import {MessageService} from './MessageService'
import {Message, Messages} from './Message'

@Component({
  selector: 'message',
  template: `
<div class="panel">write message here</div>
<div>
  <label for="write-msg">message</label>
  <input type="text" #message (keyup)="0" (submit)="0">
  <button type="button" class="btn btn-warning" (click)="save(message.value); message.value = null">save</button>
  <button type="button" class="btn btn-warning" (click)="findAll();">find all</button>
  <div>
    <div *ngIf="messages.length > 0"></div>
      <div *ngFor="let msg of messages">
        {{msg.subject}} - {{msg.body}}
      </div>
    </div>
</div>
`
})
export class MessageComponent {
  private messages: Array<Message> = []

  constructor(private messageService: MessageService) {}

  public save(body: string) {
    this.messageService.save(Messages.of('component msg', body))
    body = null
  }

  public findAll() {
    this.messages = this.messageService.findAll().reverse()
  }
}
