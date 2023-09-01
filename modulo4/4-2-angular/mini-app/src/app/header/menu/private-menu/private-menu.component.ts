import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss'],
})
export class PrivateMenuComponent {
  constructor(private auth: AuthService) {}

  checkUser(): boolean {
    return this.auth.isLogged();
  }
}
