import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '@modules/projects/services';
import { AuthService } from '@core/authentication';
import { IStage, Status } from '../../../../data/interfaces/http/stage.interface';
import { IFile } from '@app/data/interfaces/http/file.interface';

import { DatabasesService } from '@app/modules/databases/services/databases.service';
import { User } from '@app/data/models';
import { IDatabase, IProject, IUser } from '@data/interfaces';

import { CoursesService } from '@modules/academics/courses/services';
import { ICourse } from '@data/interfaces';

import { UsersService } from '@app/modules/users/services';
import { IUserDto } from '@data/interfaces';


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

  public numProjects: number = this.projects.length;

  public dataBasesUser: IDatabase[]=[{
    id: 1,
    id_user: 1,
    context: '',
    count: 1,
    type: {
      id: 1,
    type: ''
    }
  },
  {
    id: 2,
    id_user: 2,
    context: '',
    count: 2,
    type: {
      id: 2,
    type: ''
    }
  }
  ];


  private currentUser: User;
  public rows!: IDatabase[];

  public courses: ICourse[] = [
    {
      id: 1,
    year: "2023",
    period: "Periodo 1",
    image: "imagen1.jpg",
    id_subject: {
      id: 1,
    code: '',
    name: '',
    },
    id_teacher: 1,
    group: "Group 1"
  }
];

// private currentUser: User;
  public rowsUser!: IUserDto[];

  public users: IUser[] = [{
    id: 1,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    picture: '',
    is_active: true,
    roles: [],
    has_sgbd_user: true,
  },
  {
    id: 2,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    picture: '',
    is_active: true,
    roles: [],
    has_sgbd_user: true,
  },
  
];

  constructor(
    private authService: AuthService,
    private projectsService: ProjectsService,
    private dataBasesService: DatabasesService,
    private currentUserService: AuthService,
    private coursesService: CoursesService,
    private usersService: UsersService
  ) { 
    this.currentUser = this.currentUserService.getCurrentUserSubject();
  }

  ngOnInit(): void {
    this.loadProjects();
    this.getDatabases();
    this.getCourses();
    this.getUsers();
  }

  public toggleRunningState(app: any) {
    app.running = !app.running;
  }

  public trackByFn(index: number, item: IProject): number {
    return item.id;
  }

  //Para obtener los proyectos
  private loadProjects(): void {
    const id = this.authService.getCurrentUserSubject().id;
    this.projectsService
      .getProjects(id)
      .subscribe((res: IProject[]) => {
        this.projects = res;
      });
  }

  //Para obtener las bases de datos
  private getDatabases(): void {
    this.dataBasesService
      .getDatabases(this.currentUser.id)
      .subscribe((databases: IDatabase[]) => {
        this.rows = databases;
      });
  }

 //Para obtener los cursos
  private getCourses(): void {
    const id = this.authService.getCurrentUserSubject().id;
    this.coursesService
      .getCourses(id)
      .subscribe((courses: ICourse[]) => {
        this.courses = courses;
      });
  }

  //Para obtener Usuarios
  private getUsers(): void {
    this.usersService
      .getUsersById(this.currentUser.id)
      .subscribe((users: IUserDto[]) => {
        this.rowsUser = users;
      });
  }

}
