import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from '../models/user'; // import the User model

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  user: User = new User(); // create a new User object

  constructor(private userService: UserService) {}

  login() {
    this.userService
      .verifyUser(this.user.username, this.user.password) // use the User object here
      .subscribe((isValid) => {
        if (isValid) {
          // handle successful login
        } else {
          // handle failed login
        }
      });
  }
}