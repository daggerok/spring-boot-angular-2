/**
 * Created by mak on 5/24/16.
 */
export interface User {
  id: string
  username: string
  createdAt: Date
  createdAtString: string
}

export class Users {
  public static uri: string = '/api/users'
  public static of = (username: string): User => {
    return { id: null, username: username, createdAt: null, createdAtString: null }
  }
}
