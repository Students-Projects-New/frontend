import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication';

import { UsersService } from '../../services';
import { User } from '@data/models';
import { IUser, IUserDto } from '@app/data/interfaces';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private currentUser: User;
  public rowsUser!: IUserDto[];

  constructor(
    private usersService: UsersService,
    private currentUserService: AuthService
  ) { this.currentUser = this.currentUserService.getCurrentUserSubject();}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.usersService
      .getUsersById(this.currentUser.id)
      .subscribe((users: IUserDto[]) => {
        this.rowsUser = users;
      });
  }

}
