import {bootstrap}        from 'angular2/platform/browser'
import {enableProdMode}   from 'angular2/core'
import {App}              from './main/App'
import {ROUTER_PROVIDERS} from 'angular2/router'

enableProdMode()
bootstrap(App, [ROUTER_PROVIDERS])
