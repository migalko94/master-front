import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.scss'],
})
export class PublicMenuComponent {
  constructor(private auth: AuthService) {}

  checkUser(): boolean {
    return this.auth.isLogged();
  }
}
