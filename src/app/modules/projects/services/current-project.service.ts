import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { IProject } from '@data/interfaces';
import { environment } from '@env/environment';
import { CollaboratorsService } from '@core/services';
import { CoursesService } from '@modules/academics/courses/services';

@Injectable({
  providedIn: 'root'
})
export class CurrentProjectService {

  private currentProjectSubject;
  public readonly currentProject;
  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient,
    private collaboratorsService: CollaboratorsService,
    private courseService: CoursesService,
  ) {
    this.currentProjectSubject = new BehaviorSubject<IProject>(JSON.parse(localStorage.getItem('currentProject') || '{}') as IProject);
    this.currentProject = this.currentProjectSubject.asObservable();
  }

  private setCurrentProject(project: IProject): void {
    this.currentProjectSubject.next(project);
  }

  public getCurrentProject(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.url}/${HttpApi.project_Get}/${id}`)
      .pipe(
        tap((project: IProject) => {
          const collaborators = [...project.collaborators, project.id_user];
          localStorage.setItem('currentProject', JSON.stringify(project));
          this.setCurrentProject(project);
          this.courseService.getCourseById(project.subjects_period[0]).subscribe();
          this.collaboratorsService.setContributors(collaborators).subscribe();
        }),
        map((project: IProject) => project)
      );
  }

  public get currentProjectSubjectValue(): IProject {
    return this.currentProjectSubject.getValue();
  }

  public get currentProjectValue(): Observable<IProject> {
    return this.currentProject;
  }

  public clearCurrentProject(): void {
    this.currentProjectSubject.next({} as IProject);
  }

  public isContributor(id: number): boolean {
    const collaborators = this.currentProjectSubjectValue.collaborators ?? [];
    return collaborators.includes(id);
  }

  public isOwner(id: number): boolean {
    return this.currentProjectSubjectValue.id_user === id;
  }

  public isContributorOrOwner(id: number): boolean {
    return this.isContributor(id) || this.isOwner(id);
  }

}
