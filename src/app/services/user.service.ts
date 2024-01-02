import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user"; // import the User model

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "http://localhost:8080"; // replace with your API URL
  private static user: User = new User(); // create a new User object

  constructor(private http: HttpClient) {}

  getUid(username: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/${username}`);
  }

  saveUser(user: User): Observable<User> {
    // use the User model here
    return this.http.post<User>(`${this.apiUrl}/users/`, user);
  }

  // New method for creating a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/new`, user);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/me/`);
  }

  setUser(user: User): void {
    if (user){
      UserService.user = user;
    }
  }

  getUser(): User {
    this.http.get<User>(`${this.apiUrl}/users/me/`).subscribe(user => {
      UserService.user = user;
      
    });
    return UserService.user;
  }
}
