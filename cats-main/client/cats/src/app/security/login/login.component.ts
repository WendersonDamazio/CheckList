import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from './user';
import { FormsModule } from '@angular/forms';
import { UsersService } from './user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    id: '',
    user_name: '',
    user_email: '',
    user_password: ''
  }
  constructor(private usersService: UsersService) {
  }
  login() {
    return this.usersService.validateLogin(this.user)
  }
}
