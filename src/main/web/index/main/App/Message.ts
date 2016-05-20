/**
 * Created by mak on 5/20/16.
 */
export interface Message {
  subject: string
  body: string
}

export class Messages {
  public static empty = () => {return {subject: null, body: null}}
  public static of = (subject: string, body: string) => {return {subject: subject, body: body}}
  public static isValid = (message: Message): boolean =>
    message.subject != null && message.subject.length > 0 && message.body != null && message.body.length > 0
  static clone = (message: Message) => Messages.of(message.subject, message.body)
}
