import {bootstrap}      from 'angular2/platform/browser'
import {enableProdMode} from 'angular2/core'
import {App}            from './main/App'
import {HTTP_PROVIDERS} from 'angular2/http'

enableProdMode()
bootstrap(App, [
  HTTP_PROVIDERS
])
