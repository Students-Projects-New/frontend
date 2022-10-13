import { Component, OnInit } from '@angular/core';

import { IProject } from '@data/interfaces/project.interface';
import { ProjectService } from '@modules/projects/services/project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projects: IProject[] = [];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  public loadProjects(): void {
    this.projectService.getProjects('1').subscribe((res: IProject[]) => {
      this.projects = res;
    });
  }

  public deleteProject(id: any): void {
    this.projectService.deleteProject(id).subscribe((res) => {
      console.log(res);
    });
  }

}
