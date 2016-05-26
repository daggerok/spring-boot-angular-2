import {Component}        from 'angular2/core'
import {UserHttpService}  from './UserHttpService'
import {User, Users}      from './User'
import {Response}         from 'angular2/http'

/**
 * Created by mak on 5/24/16.
 */
@Component({
  selector: 'user-form',
  template: `
<section>
  <form>
    <fieldset class="form-group">
      <label for="username">enter username</label>
      <input name="username" class="form-control" type="text" #username (keyup)="0">
      <button class="btn btn-primary" (click)="post(username.value)">create user</button>
    </fieldset>
  </form>
</section>

<div class="panel">
  <button type="submit" class="btn btn-primary" (click)="get()" >get users</button>
  <pre *ngIf="resp">{{resp}}</pre>
</div>

<section>
  <ul *ngFor="let user of users">
    <li><pre>{{user.id}}. {{user.username}} {{user.createdAtString}}</pre></li>
  </ul>
</section>
`,
  providers: [UserHttpService]
})
export class UserForm {
  private resp: string
  private users: User[]

  constructor(private userHttpService: UserHttpService) {}

  public get() {
    this.userHttpService.getAllUsers().subscribe(
      ok => this.subscribeGet(ok),
      err => this.userHttpService.handleError(err)
    )
  }

  public post(username: string) {
    this.userHttpService.postUser(Users.of(username))
      .subscribe(
        ok => this.subscribePost(ok),
        err => this.userHttpService.handleError(err)
      )
  }

  private subscribeGet(ok: Response) {
    let body = this.userHttpService.extractData(ok)
    let links = this.userHttpService.links(body)

    this.resp = this.userHttpService.pretty(links.self)
    this.users = this.userHttpService.users(body)
  }

  private subscribePost(ok: Response) {
    let body = this.userHttpService.extractData(ok)

    console.log('pring result', this.userHttpService.pretty(body))
  }
}
