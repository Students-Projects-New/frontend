import { Component, OnInit } from '@angular/core';

import { IDatabase } from '@data/interfaces';
import { User } from '@data/models';
import { AuthService } from '@core/authentication/auth.service';
import { DatabasesService } from '@modules/databases/services/databases.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private currentUser: User;
  public rows!: IDatabase[];
  public limit: number = 10;
  public showModal: boolean = false;

  constructor(
    private databaseService: DatabasesService,
    private currentUserService: AuthService
  ) {
    this.currentUser = this.currentUserService.getCurrentUserSubject();
  }

  ngOnInit(): void {
    this.getDatabases();
  }

  private getDatabases(): void {
    this.databaseService
      .getDatabases(this.currentUser.id)
      .subscribe((databases: IDatabase[]) => {
        this.rows = databases;
      });
  }

  public closeModal(event: boolean): void {
    this.showModal = event;
  }

  public createDatabase(): void {
    this.showModal = true;
  }

  public deleteDatabase(id: number): void {
    console.log(id);
  }

  public hasSGDB(): boolean {
    return this.currentUser.hasOwnProperty('has_sgbd_user') && this.currentUser.has_sgbd_user === true;
  }

}
