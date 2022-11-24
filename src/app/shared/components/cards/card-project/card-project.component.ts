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
    this.setImages();
    this.setCollaborators();
  }

  private setCollaborators(): void {
    /*if (this.project.collaborators.length > 0) {
      this.collaborators = [...this.project.collaborators];
    }
    this.collaborators.push(this.project.id_user);*/
    this.collaborators = [...this.project.collaborators, this.project.id_user];
    this.getCollaborators();
  }

  private setImages(): void {
    const image = this.project.image || 'assets/img/projects/product1.jpg';
    this.project.image = image.replace('https:', 'http:');
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
