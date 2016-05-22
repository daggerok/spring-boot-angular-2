import {PipeTransform, Pipe} from 'angular2/core'
import {Item} from './Item'

@Pipe({
  name: 'filter'
})
export class AppFilter implements PipeTransform {
  public transform(items: Array<Item>, args: string[]): Array<Item> {
    return 0 === items.length || null == args || null == args[0]
      ? items
      : items.filter(item => this.contains(item, args[0]))
/*
    if (0 === items.length || null == args || null == test) {
      return items
    }

    return items.filter(item => this.contains(item, test))
*/
  }

  private contains(item: Item, input: string): boolean {
    let pattern: string = `^.*${input.toLocaleLowerCase()}.*$`
    /* match() returns array of matches */
    return item.title.toLocaleLowerCase().match(pattern).length > 0
      || `${item.quantity}`.match(pattern).length > 0
  }
/*
  private contains = (item: Item, input: string): boolean =>
    -1 != item.title.toLocaleLowerCase().indexOf(input.toLocaleLowerCase())
    || -1 != `${item.quantity}`.indexOf(input)
*/
}
