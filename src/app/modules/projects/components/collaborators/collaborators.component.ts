import { Component, OnInit } from '@angular/core';

import { IUserDto } from '@data/interfaces';
import { CurrentProjectService } from '@modules/projects';
import { CollaboratorsService } from '@core/services';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {

  private id_owner: number;
  public collaborators: Record<number, IUserDto>;
  public list: number[];

  constructor(
    private currentProjectService: CurrentProjectService,
    private collaboratorsService: CollaboratorsService
  ) {
    this.id_owner = this.currentProjectService.currentProjectSubjectValue.id_user;
    this.collaborators = {};
    this.list = [];
  }

  ngOnInit(): void {
    this.getContributors();
  }

  public getContributors(): void {
    this.collaboratorsService
      .currentContributors
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
    return this.collaborators[id].id === this.id_owner ? 'Owner' : 'Contributor';
  }

}
