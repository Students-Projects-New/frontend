import { Component, OnInit } from '@angular/core';

import { CurrentProjectService } from '../../services/current-project.service';
import { CollaboratorsService } from '@app/core/services/collaborators.service';
import { DeploymentsService } from '../../services/deployments.service';
import { IProject, IUserDto } from '@data/interfaces';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
export class DeployComponent implements OnInit {

  deployments: any = [];
  contribuidor: Record<number, IUserDto> = this.collaboratorsService.contributorsSubjectValue;
  proyecto: IProject = this.currentProjectService.currentProjectSubjectValue;


  constructor(
    private currentProjectService: CurrentProjectService,
    private collaboratorsService: CollaboratorsService,
    private deploymentsService: DeploymentsService
  ) { }


  ngOnInit(): void {
    this.getDeploymentsByProject();
  }

  public getURLRepostrory(commit: string): string {
    const url = this.proyecto.url.replace('.git', '/commit/');
    return url.concat(commit);
  }


  private getDeploymentsByProject(): void {
    const idProject = this.proyecto.id;
    this.deploymentsService.
      getDeploymentsByProject(idProject)
      .subscribe((deployments) => {
        this.deployments = deployments;
      });
  }

  public isDeploymentsEmpty(): boolean {
    return this.deployments.length === 0;
  }

}
