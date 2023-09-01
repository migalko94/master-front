import { Injectable } from '@angular/core';
import { User } from '../login/loginModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  logged: boolean;

  constructor(private router: Router) {
    this.user = {
      email: '',
      password: '',
    };
    this.logged = false;
  }

  login(user: User): boolean {
    if (user.email == 'master8@lemoncode.net' && user.password == 12345678) {
      this.router.navigate(['/dashboard']);
      this.user = user;
      this.logged = true;
      localStorage.setItem('user', JSON.stringify(user));

      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.clear();
    this.logged = false;
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    const userSaved = localStorage.getItem('user');
    return userSaved !== null;
  }

  getUsername() {
    const userSaved = localStorage.getItem('user');
    if (userSaved !== null) {
      return JSON.parse(userSaved).email;
    }
  }
}
