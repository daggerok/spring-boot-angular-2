/**
 * Created by mak on 5/21/16.
 */
import {Injectable} from 'angular2/core'
import {Item, Items} from './Item'
import {db} from './ItemMockedRepository'

@Injectable()
export class ItemService {
  public size = (): number => db.length

  public save(item: Item): Item {
    if (!this.exists(item) && Items.isValid(item)) {
      let id = this.size()
      db.push(Items.of(id, item))
      return db[id]
    }
  }

  public update(item: Item) {
    if (this.exists(item) && this.has(item) && Items.isValid(item)) {
      db[item.id] = Items.clone(item)
    }
  }

  public exists = (item: Item): boolean => db.filter(curr => this.equals(item, curr)).length > 0

  public equals = (i1: Item, i2: Item) =>
  Items.isValid(i1) && Items.isValid(i2)
  && i1.title === i2.title && i1.quantity === i2.quantity

  public deepEquals = (item: Item): boolean =>
  this.has(item) && db.filter(curr => item.id === curr.id && this.equals(item, curr)).length > 0

  public has = (item: Item): boolean => null != item && null != item.id && item.id < this.size()

  public findOne = (id: number): Item => db[id]

  public findAll = (): Array<Item> => db.filter(item => Items.isValid(item))
/*
  public delete(item: Item) {
    let index = db.indexOf(item, 0);
    if (index > -1) {
      db[index] = null
    }
  }
*/
  public delete = (id: number) => db[id] = null
}
