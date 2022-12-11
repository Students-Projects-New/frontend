import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '@core/authentication';
import { ISidebar } from '@data/interfaces';
import { ROLE } from '@data/enums';
import { User } from '@data/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['a { cursor: pointer; }']
})
export class SidebarComponent implements OnInit {

  @Input() menuItems!: ISidebar[];
  public currentUser: User;

  constructor(
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getCurrentUserSubject();
  }

  ngOnInit(): void { }

  public hasRole(roles: ROLE[]): boolean {
    if (!roles) return true;
    return this.authService.hasRole(roles);
  }

  public logOut(): void {
    this.authService.logout();
  }

}
