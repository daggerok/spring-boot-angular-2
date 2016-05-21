/**
 * Created by mak on 5/21/16.
 */
import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";

@Component({
    selector: 'template-driven-form',
    template: `
<h4>template driven sign-up</h4>
<form #form="ngForm" (ngSubmit)="onSubmit(form)">
  <fieldset class="form-group">
    <label for="email">email</label>
    <input ngControl="email" type="email" required #email="ngForm">
    <small class="text-muted red" *ngIf="!email.valid">hidden email message, visible only for invalid state</small>
  </fieldset>
    
  <fieldset class="form-group">
    <label for="password">password</label>
    <input ngControl="password" type="password" required #password="ngForm">
    <small class="text-muted red" *ngIf="!password.valid">hidden password message, visible only for invalid state</small>
  </fieldset>
    
  <fieldset class="form-group">
    <label for="confirm-password">confirm password</label>
    <input ngControl="confirmPassword" required type="password" #confirmPassword="ngForm">
    <small class="text-muted red" *ngIf="!confirmPassword.valid">hidden confirm password message, visible only for invalid state</small>
  </fieldset>
  
  <button 
    [disabled]="!email.valid || password.value != confirmPassword.value" 
    type="submit" class="btn btn-default">submit</button>
  
  <section>{{data}}</section>
</form>
`,
    styles: [`
.red {
  color: orangered;
}
`]
})
export class TemplateDrivenForm {
    private data: string

    /* public onSubmit(form: EventEmitter) { */
    public onSubmit(form: ControlGroup) {
        this.data = JSON.stringify(form.value, null, 2)
        /*
        console.log(form.controls)
        console.log(form.controls['email'])
        */
    }
}
