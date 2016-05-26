import {Injectable}                               from 'angular2/core'
import {Http, Headers, Response, RequestOptions}  from 'angular2/http'
import {Users, User}                              from './User'
import                                                 'rxjs/add/operator/map'
import {Observable}                               from 'rxjs/Observable'

/**
 * Created by mak on 5/25/16.
 */
@Injectable()
export class UserHttpService {

  constructor(private http: Http) {}

  /* Observable */

  public getAllUsers(): Observable<Response> {
    let headers: Headers = new Headers({ 'Access-Control-Allow-Origin': '*' })

    return this.http.get(Users.uri, {headers: headers})
  }

  /* use once per http call any of methods with args res: Response */

  public extractData = (res: Response) => res.json() || {}

  public embedded = (data: any) => data._embedded

  public links = (data: any): any => data._links

  public users = (data: any): User[] => this.embedded(data).users

  public prettyData = (data: any)  => this.pretty(data)

  public extractDataToPrettyString = (data: any) => this.pretty(data)

  public extractDataLinksToPrettyString = (data: any) => this.pretty(data)

  /* pretty print */

  public pretty = (object: any): string => JSON.stringify(object, null, 2)

  public handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    console.error(errMsg)
    return Observable.throw(errMsg)
  }

  public postUser(user: User): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    return this.http.post(Users.uri, this.pretty(user), options)
  }

  /* Promise */

  /*
  public getAllUsersPromise(): Promise<User[]> {
    return this.http.get(Users.uri)
      .toPromise()
      .then(this.extractUsersDataWithPromise)
      .catch(this.handleErrorWithPromise)
  }

  private extractUsersDataWithPromise(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorWithPromise(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
  */
}
