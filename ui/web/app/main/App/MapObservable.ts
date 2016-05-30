/**
 * Created by mak on 5/30/16.
 */
import {Component} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

@Component({
  selector: 'map-observablr',
  styles: [`
.red {
  color: orangered;
}
`],
  template: `
<div>
  <h3 class="panel panel-heading">create one</h3>
  <input type="text" #name (keyup)="0">
  <button class="btn btn-default" (click)="postUsr(name.value)">save usr</button>
</div>
<div>
  <h3 class="panel panel-body">user list <button class="btn btn-success" (click)="getUsrs()">usrs</button></h3>
  <ul *ngFor="let usr of usrs;">
    <li>user {{usr.username}} with id {{usr.id}}</li>
  </ul>
</div>
`
})
export class MapObservable {
  private usrs: Usr[]

  constructor(private http: Http) {}

  public getUsrs() {
    this.fetch()
      .subscribe(
        response => this.usrs = response._embedded.users,
        err => console.error(err)
      )
  }

  public postUsr(name: string) {
    this.save(Usrs.of(name))
      .subscribe(
        json => console.log(json),
        err => console.error(err)
      )
  }

  public fetch(): Observable<any> {
    return this.http.get('/api/users')
      .map(resp => resp.json())
  }

  public save(usr: Usr): Observable<any> {
    let headers = new Headers()

    headers.append('content-type', 'application/json')
    return this.http.post('/api/users', JSON.stringify(usr), {headers: headers})
      .map(resp => resp.json())
  }
}

class Usrs {
  public static of(name: string) {
    return {username: name, id: null}
  }
}

interface Usr {
  username: string
  id: string
}
