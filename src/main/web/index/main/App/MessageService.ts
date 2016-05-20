/**
 * Created by mak on 5/20/16.
 */
import {Injectable} from 'angular2/core'
import {Message, Messages} from './Message'
import {LoggerService} from './LoggerService';

@Injectable()
export class MessageService {
  private messages: Array<Message> = []

  constructor(private l: LoggerService) {}

  public save(message: Message) {
    this.l.log(message)
    if (Messages.isValid(message)) {
      this.messages.push(Messages.of(message.subject, message.body))
    }
  }

  public findAll = (): Array<Message> => {
    let messages: Array<Message> = []
    this.messages.map(message => {
      messages.push(Messages.clone(message))
    })
    return messages
  }
}
