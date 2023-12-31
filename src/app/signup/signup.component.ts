import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user'; // import the User model

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User(); // create a new User object

  constructor(private userService: UserService) { }

  signup() {
    this.userService.saveUser(this.user).subscribe(isCreated => { // use the saveUser method
      if (isCreated) {
        // handle successful signup
      } else {
        // handle failed signup
      }
    });
  }
}