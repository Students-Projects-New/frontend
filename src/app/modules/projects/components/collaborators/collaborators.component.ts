import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IUserDto } from '@data/interfaces';
import { AuthService } from '@core/authentication/auth.service';
import { CollaboratorsService } from '@app/core/services/collaborators.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {

  private id_user: number = this.authService.getCurrentUserSubject().id;
  public collaborators: Record<number, IUserDto> = {};
  public list: number[] = [];

  constructor(
    private authService: AuthService,
    private collaboratorsService: CollaboratorsService
  ) { }

  ngOnInit(): void {
    this.getContributors();
  }

  public getContributors(): void {
    this.collaboratorsService.currentContributors
      .subscribe((contributors: Record<number, IUserDto>) => {
        this.collaborators = contributors;
        this.list = Object.keys(this.collaborators).map(Number);
      });
  }

  public getContributorsLength(): number {
    return Object.keys(this.collaborators).length;
  }

  public removeCollaborator(id: number): void {
    console.log(id);
  }

  getRole(id: number): string {
    if (this.collaborators[id].id !== this.id_user) return 'Collaborator';
    return 'Owner';
  }

}
