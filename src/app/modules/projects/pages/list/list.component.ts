import { Component, OnInit } from '@angular/core';

import { IProject } from '@data/interfaces';
import { AuthService } from '@app/core';
import { ProjectsService } from '@modules/projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public projects: IProject[] = [];

  constructor(
    private authService: AuthService,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    const id = this.authService.getCurrentUserSubject().id;
    this.projectsService
      .getProjects(id)
      .subscribe((res: IProject[]) => {
        this.projects = res;
      });
  }

  private deleteProject(id: any): void {
    this.projectsService
      .deleteProject(id)
      .subscribe((res) => {
        console.log(res);
      });
  }

  public trackByFn(index: number, item: IProject): number {
    return item.id;
  }

}
