import { Component, OnInit } from '@angular/core';

import { AuthService } from '@core/authentication/auth.service';
import { User } from '@data/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['a { cursor: pointer; }']
})
export class NavbarComponent implements OnInit {

  public currentUser: User;

  constructor(
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getCurrentUserSubject();
  }

  ngOnInit(): void { }

  public logOut(): void {
    this.authService.logout();
  }

}
