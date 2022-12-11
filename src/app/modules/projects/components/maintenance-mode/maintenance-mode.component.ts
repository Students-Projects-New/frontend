import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/core';
import { CurrentProjectService } from '@modules/projects';
import { ProjectsService } from '@modules/projects';

@Component({
  selector: 'app-maintenance-mode',
  templateUrl: './maintenance-mode.component.html',
  styleUrls: ['./maintenance-mode.component.css']
})
export class MaintenanceModeComponent implements OnInit {

  public maintenanceMode: boolean;
  public canToggleMaintenanceMode: boolean;

  constructor(
    private authService: AuthService,
    private currentProjectService: CurrentProjectService,
    private projectService: ProjectsService
  ) {
    this.maintenanceMode = this.currentProjectService.currentProjectSubjectValue.running;
    this.canToggleMaintenanceMode = true;
  }

  ngOnInit(): void { }

  toggleMaintenanceMode() {
    if (this.maintenanceMode) {
      this.stopMaintenanceMode();
    } else {
      this.getMaintenanceMode();
    }
  }

  public getUserDto(): any {
    return {
      id_user: this.currentProjectService.currentProjectSubjectValue.id_user,
      id_user_deploy: this.authService.getCurrentUserSubject().id,
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
