import { Component, OnInit } from '@angular/core';


import { CurrentProjectService } from '@modules/projects/services/current-project.service';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { IProjectDto } from '@data/interfaces';

@Component({
  selector: 'app-maintenance-mode',
  templateUrl: './maintenance-mode.component.html',
  styleUrls: ['./maintenance-mode.component.css']
})
export class MaintenanceModeComponent implements OnInit {

  public maintenanceMode: boolean;
  public canToggleMaintenanceMode: boolean;

  constructor(
    private currentProjectService: CurrentProjectService,
    private projectService: ProjectsService
  ) {
    this.maintenanceMode = this.currentProjectService.currentProjectSubjectValue.running;
    this.canToggleMaintenanceMode = true;
  }

  ngOnInit(): void { }

  toggleMaintenanceMode() {
    this.canToggleMaintenanceMode = false;
    if (this.maintenanceMode) {
      this.stopMaintenanceMode();
    } else {
      this.getMaintenanceMode();
    }
  }

  public getUserDto(): IProjectDto {
    return {
      id_user: this.currentProjectService.currentProjectSubjectValue.id_user,
      id_project: this.currentProjectService.currentProjectSubjectValue.id,
    };
  }

  private getMaintenanceMode() {
    this.projectService
      .deployProject(this.getUserDto())
      .subscribe(() => {
        this.maintenanceMode = true;
      });
  }

  private stopMaintenanceMode() {
    this.projectService
      .deleteWorkspace(this.getUserDto())
      .subscribe(() => {
        this.maintenanceMode = false;
      });
  }

}
