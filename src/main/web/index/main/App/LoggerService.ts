/**
 * Created by mak on 5/20/16.
 */
import {Injectable} from 'angular2/core'
import {Message} from './Message'

@Injectable()
export class LoggerService {
  public log(message: Message) {
    console.log('logging-service', message)
  }
}
