/**
 * Created by mak on 5/21/16.
 */
import {Injectable} from 'angular2/core';
import {Item, Items} from './Item';

@Injectable()
export class ItemService {
  private db: Array<Item> = []

  public size = (): number => this.db.length

  public save(item: Item): Item {
    if (!this.exists(item) && Items.isValid(item)) {
      let id = this.size()
      this.db.push(Items.of(id, item))
      return this.db[id]
    }
  }

  public update(item: Item) {
    if (this.exists(item) && this.has(item) && Items.isValid(item)) {
      this.db[item.id] = Items.clone(item)
    }
  }

  public exists = (item: Item): boolean => this.db.filter(curr => this.equals(item, curr)).length > 0

  public equals = (i1: Item, i2: Item) =>
    Items.isValid(i1) && Items.isValid(i2)
    && i1.title === i2.title && i1.quantity === i2.quantity

  public deepEquals = (item: Item): boolean =>
    this.has(item) && this.db.filter(curr => item.id === curr.id && this.equals(item, curr)).length > 0

  public has = (item: Item): boolean => null != item && null != item.id && item.id < this.size()

  public findOne = (id: number): Item => this.db[id]

  public findAll = (): Array<Item> => this.db.filter(item => Items.isValid(item))
/*
  public delete(item: Item) {
    let index = this.db.indexOf(item, 0);
    if (index > -1) {
      this.db[index] = null
    }
  }
*/
  public delete = (id: number) => this.db[id] = null
}
