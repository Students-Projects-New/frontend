import { Component, OnInit } from '@angular/core';

import { IProject, IUserDto } from '@data/interfaces';
import { CollaboratorsService } from '@app/core/services/collaborators.service';
import { CurrentProjectService } from '@app/modules/projects/services/current-project.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public project: IProject = {} as IProject;
  public collaborators: Record<number, IUserDto> = {};

  constructor(
    private collaboratorsService: CollaboratorsService,
    private currentProjectService: CurrentProjectService,
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  public getProject(): void {
    this.currentProjectService
      .currentProjectValue
      .subscribe((project: IProject) => {
        this.project = project;
        console.log(project);
        this.getContributors();
      });
  }

  public getContributors(): void {
    this.collaboratorsService.currentContributors
      .subscribe((contributors: Record<number, IUserDto>) => {
        this.collaborators = contributors;
      });
  }

  public getContributorsLength(): number {
    return Object.keys(this.collaborators).length;
  }

}
