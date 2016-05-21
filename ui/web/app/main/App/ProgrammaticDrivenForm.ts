/**
 * Created by mak on 5/21/16.
 */
import {Component, OnInit} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {CustomValidator} from "./CustomValidator";

@Component({
    selector: 'programming-driven-form',
    template: `
<h4>programming driven sign-up</h4>
<form [ngFormModel]="form" (ngSubmit)="onSubmit()">
  <fieldset class="form-group">
    <label for="email">email</label>
    <input [ngFormControl]="form.controls['email']" type="email" #email="ngForm">
    <small class="text-muted red" *ngIf="!email.valid">
      hidden email message, visible only for invalid state
    </small>
  </fieldset>
    
  <fieldset class="form-group">
    <label for="password">password</label>
    <input [ngFormControl]="form.controls['password']" type="password" #password="ngForm">
    <small class="text-muted red" *ngIf="!password.valid">
      hidden password message, visible only for invalid state
    </small>
  </fieldset>
    
  <fieldset class="form-group">
    <label for="confirm-password">confirm password</label>
    <input [ngFormControl]="form.controls['confirmPassword']" type="password" #confirmPassword="ngForm">
    <small class="text-muted red" *ngIf="!confirmPassword.valid">
      hidden confirm password message, visible only for invalid state
    </small>
  </fieldset>
  
  <button
    [disabled]="!email.valid || password.value != confirmPassword.value" 
    type="submit"
    class="btn btn-default">submit</button>
  <div>{{data}}</div>
</form>
`,
    styles: [`
.red {
  color: orangered;
}
`],
    providers: [CustomValidator]
})
export class ProgrammaticDrivenForm implements OnInit {
    private form: ControlGroup
    private data: string

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.compose([
              Validators.required,
              CustomValidator.hasAt
            ])],
            password: ['', Validators.compose([
              Validators.required,
              CustomValidator.hasNumbers
            ])],
            confirmPassword: ['', Validators.required]
        })
    }

    public onSubmit() {
        this.data = JSON.stringify(this.form.value, null, 2)
        console.log(this.form.controls[Constants.email])
    }
}

class Constants {
    public static email: string = 'email'
}
