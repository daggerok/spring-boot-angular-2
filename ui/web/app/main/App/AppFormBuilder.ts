/**
 * Created by mak on 5/22/16.
 */
import {Injectable} from "angular2/core";
import {FormBuilder, Validators, ControlGroup} from "angular2/common";
import {AppValidator} from "./AppValidator";

@Injectable()
export class AppFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  public build(): ControlGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      quantity: [0, Validators.compose([
        Validators.required,
        AppValidator.greaterThenZero
      ])],
    })
  }
}
