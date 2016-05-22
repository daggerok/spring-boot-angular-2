import {bootstrap} from 'angular2/platform/browser'
import {enableProdMode} from 'angular2/core'
import {App} from './main/App'
import {ItemService} from './main/App/ItemService'

enableProdMode()
bootstrap(App, [ItemService])
