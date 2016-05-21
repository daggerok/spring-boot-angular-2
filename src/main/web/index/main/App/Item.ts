/**
 * Created by mak on 5/18/16.
 */
export interface Item {
  id: number
  title: string
  quantity: number
}
export class Items {
  public static of = (id: number, item: Item) => {return {id: id, title: item.title, quantity: item.quantity}}
  public static empty = () => {return {id: null, title: null, quantity: null}}
  public static clone = (item: Item): Item => {return {id: item.id, title: item.title, quantity: item.quantity}}
  public isNew = (item: Item): boolean => null != item && null == item.id
  public static isValid = (item: Item): boolean =>
    null != item && null != item.title && item.title.length > 0 && null != item.quantity && item.quantity > 0
}
