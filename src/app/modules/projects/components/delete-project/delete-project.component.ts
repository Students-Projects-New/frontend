import { Component, OnInit } from '@angular/core';

import { CurrentProjectService, ProjectsService } from '@modules/projects/services';
import { IProjectDto } from '@data/interfaces';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  private project: IProjectDto = {} as IProjectDto;

  constructor(
    private projectsService: ProjectsService,
    private currentProjectService: CurrentProjectService
  ) { }

  ngOnInit() {
    this.project = {
      id_user: this.currentProjectService.currentProjectSubjectValue.id_user,
      id_project: this.currentProjectService.currentProjectSubjectValue.id
    }
  }

  deleteProject() {
    this.projectsService
      .deleteProject(this.project)
      .subscribe(() => {
        this.currentProjectService.clearCurrentProject();
      });
  }

}
