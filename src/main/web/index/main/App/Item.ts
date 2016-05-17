/**
 * Created by mak on 5/18/16.
 */
export interface Item {
  title: string
  quantity: number
}
export class Items {
  public static empty = () => {return {title: null, quantity: null}}
  public static clone = (item: Item): Item => {return {title: item.title, quantity: item.quantity}}
  public static isValid = (item: Item): boolean =>
    null != item && null != item.title && item.title.length > 0 && null != item.quantity && item.quantity > 0
}
