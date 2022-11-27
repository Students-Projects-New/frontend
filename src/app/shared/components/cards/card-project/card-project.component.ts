import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProject, IDictionary, IUserDto } from '@data/interfaces';
import { CollaboratorsService } from '@app/core/services/collaborators.service';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit, OnDestroy {

  @Input() project!: IProject;
  private collaboratorSubscription: Subscription | undefined;
  private collaborators: number[] = [];
  public contributors: Record<number, IUserDto> = {};

  constructor(
    private collaboratorsService: CollaboratorsService
  ) { }

  ngOnInit(): void {
    this.setCollaborators();
  }

  private setCollaborators(): void {
    this.collaborators = [...this.project.collaborators, this.project.id_user];
    this.getCollaborators();
  }

  private getCollaborators(): void {
    this.collaboratorSubscription = this.collaboratorsService
      .setContributors(this.collaborators)
      .subscribe((contributors: IUserDto[]) => {
        contributors.forEach((contributor: IUserDto) => {
          this.contributors[contributor.id] = contributor;
        });
      });
  }

  public getContributorsLength(): number {
    return Object.keys(this.contributors).length;
  }

  ngOnDestroy(): void {
    this.collaboratorSubscription?.unsubscribe();
  }

}
