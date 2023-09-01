import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { User } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  newUser: User;
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.newUser = {
      email: '',
      password: '',
    };

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.emailControl = this.loginForm.get('email') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {}
  emailError() {
    if (this.emailControl.hasError('required')) {
      return 'El email es obligatorio';
    }

    return this.emailControl.hasError('email') ? 'No es un email válido' : '';
  }

  passwordError() {
    return this.passwordControl.hasError('required')
      ? 'La contraseña es obligatoria'
      : '';
  }

  logUser() {
    this.newUser = this.loginForm.value;
    if (this.loginForm.valid) {
      this.auth.login(this.newUser);
    }
  }
}
