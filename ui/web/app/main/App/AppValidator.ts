import {Injectable} from "angular2/core";
import {Control} from "angular2/common";
/**
 * Created by mak on 5/22/16.
 */

@Injectable()
export class AppValidator {
  public static greaterThenZero(control: Control): AppValidatorResult {
    if (control.value < 1) {
      return AppValidatorResults.invalid()
    }
  }
}

export class AppValidatorResults {
  public static invalid = () => {return {lessThanOne: true}}
}

export interface AppValidatorResult {
  lessThanOne: boolean
}
