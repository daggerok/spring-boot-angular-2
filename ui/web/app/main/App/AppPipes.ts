/**
 * Created by mak on 5/22/16.
 */
import {Pipe, PipeTransform} from "angular2/core"

export class NumberType {
  public static EVEN: string = 'even'
  public static ODD: string = 'odd'
}

let log = (type: string, value: string) => console.log(type, 'value', value)

export let isEven = (value: string): boolean => +value % 2 === 0

@Pipe({name: 'even'})
export class EvenPipe implements PipeTransform {
  public transform(value: string, args: any[]): any {
    if (isEven(value)) {
      log(NumberType.EVEN, value)
      return value
    }
  }
}

@Pipe({name: 'isEven'})
export class IsEvenPipe implements PipeTransform {
  public transform(value: string, args: any[]): boolean {
    log(NumberType.ODD, value)
    return isEven(value)
  }
}

@Pipe({name: 'odd'})
export class OddPipe implements PipeTransform {
  public transform(value: string, args: any[]): any {
    if (!isEven(value)) {
      log(NumberType.ODD, value)
      return value
    }
  }
}

@Pipe({name: 'isOdd'})
export class IsOddPipe implements PipeTransform {
  public transform(value: string, args: any[]): boolean {
    log(NumberType.ODD, value)
    return !isEven(value)
  }
}
