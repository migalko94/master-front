import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() getUser = this.getUsername();

  constructor(public auth: AuthService) {}

  logOutButtonHandler() {
    return this.auth.logout();
  }

  checkUser(): boolean {
    return this.auth.isLogged();
  }

  getUsername() {
    return this.auth.getUsername();
  }
}
