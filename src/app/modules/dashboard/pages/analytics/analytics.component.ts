import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '@modules/projects/services';
import { IProject } from '@data/interfaces';
import { AuthService } from '@core/authentication';
import { IStage, Status } from '../../../../data/interfaces/http/stage.interface';
import { IFile } from '@app/data/interfaces/http/file.interface';




@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {



  private esta: Status = {id:1,status:'asd'};

  private archivo: IFile[] = [{
    id: 1,
    uuid_file: '',
    name: '',
    file: ''
  }];

  private estados: IStage[] = [{
    id: 1,
    status: this.esta,
    files: this.archivo,
    name: 'activado',
    description: '',
    
  }]

  public projects: IProject[] = [
    { 
      id: 1,
      id_user: 2,
      name: 'Proyecto PRUEBA',
      description: '',
      image: '',
      context: '',
      port_container: 3002,
      url: '',
      static_path: '',
      subjects_period: [1,2],
      tags: [{
        id_project_tag: 1,
        tag: {
            id: 1,
        type_tag: {
            id: 1,
        name: '',
        },
        name: '',
        },
      }],
      stages: this.estados,
      collaborators: [1,2],
      subjects: [1,2],
      running: false,
      guid: '',
    },
    { 
      id: 2,
      id_user: 3,
      name: 'Proyecto PRUEBA 2',
      description: '',
      image: '',
      context: '',
      port_container: 3003,
      url: '',
      static_path: '',
      subjects_period: [1,2],
      tags: [{
        id_project_tag: 2,
        tag: {
            id: 2,
        type_tag: {
            id: 2,
        name: '',
        },
        name: '',
        },
      }],
      stages: this.estados,
      collaborators: [1,2],
      subjects: [1,2],
      running: false,
      guid: '',
    },
    { 
      id: 4,
      id_user: 4,
      name: 'Proyecto PRUEBA 3',
      description: '',
      image: '',
      context: '',
      port_container: 3005,
      url: '',
      static_path: '',
      subjects_period: [1,2],
      tags: [{
        id_project_tag: 4,
        tag: {
            id: 4,
        type_tag: {
            id: 4,
        name: '',
        },
        name: '',
        },
      }],
      stages: this.estados,
      collaborators: [1,2],
      subjects: [1,2],
      running: false,
      guid: '',
    },
  ];

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

  public toggleRunningState(app: any) {
    app.running = !app.running;
  }

  public trackByFn(index: number, item: IProject): number {
    return item.id;
  }
}
