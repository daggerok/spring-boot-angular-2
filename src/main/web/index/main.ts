import {bootstrap}      from 'angular2/platform/browser'
import {enableProdMode} from 'angular2/core'
import {App}            from './main/App'
import {LoggerService}  from './main/App/LoggerService';
import {MessageService} from './main/App/MessageService';

enableProdMode()
bootstrap(App, [
  LoggerService,
  MessageService
])
