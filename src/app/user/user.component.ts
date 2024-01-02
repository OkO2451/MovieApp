import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service'; // import LoginService
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = this.userService.getUser();

  constructor(private userService: UserService, private loginService: LoginService) { // inject LoginService

  }

  ngOnInit(): void {
    console.log("UserComponent.ngOnInit(): user = ", this.user);
  }
}