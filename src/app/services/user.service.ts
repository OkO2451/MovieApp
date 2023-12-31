import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'; // import the User model

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getUid(username: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/${username}`);
  }

  saveUser(user: User): Observable<User> { // use the User model here
    return this.http.post<User>(`${this.apiUrl}/users/`, user);
  }

  verifyUser(username: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/users/verify/${username}/${password}`);
  }
}