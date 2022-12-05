import { Component, OnInit } from '@angular/core';


import { CurrentProjectService } from '@modules/projects/services/current-project.service';
import { ProjectsService } from '@modules/projects/services/projects.service';

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
    this.maintenanceMode = false;
    this.canToggleMaintenanceMode = true;
  }

  ngOnInit(): void { }

  toggleMaintenanceMode() {
    this.getMaintenanceMode();
  }

  public getUserDto(): any {
    return {
      id_user: this.currentProjectService.currentProjectSubjectValue.id_user,
      id_project: this.currentProjectService.currentProjectSubjectValue.id,
    };
  }

  public getMaintenanceMode() {
    this.projectService.deployProject(this.getUserDto())
      .subscribe((res) => {
        this.maintenanceMode = true;
        console.log(res);
      });
  }

}
