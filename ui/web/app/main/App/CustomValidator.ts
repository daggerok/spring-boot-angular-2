/**
 * Created by mak on 5/22/16.
 */
import {Injectable} from "angular2/core";
import {Control} from "angular2/common";

@Injectable()
export class CustomValidator {
  public static hasNumbers(control: Control): BindingResult {
    if (!control.value.match('\\d+')) {
      return BindingResults.invalid()
    }
  }
  public static hasAt(control: Control): BindingResult {
    if (!control.value.match('@')) {
      return BindingResults.invalid()
    }
  }
}

export class BindingResults {
  public static invalid = () => {return {noNumbers: true}}
}

export interface BindingResult {
  noNumbers: boolean
}
