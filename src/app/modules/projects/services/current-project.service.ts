import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { IProject } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentProjectService {

  private currentProjectSubject = new BehaviorSubject<IProject>({} as IProject);
  public readonly currentProject = this.currentProjectSubject.asObservable();
  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient,
  ) { }

  private setCurrentProject(project: IProject): void {
    this.currentProjectSubject.next(project);
  }

  public getCurrentProject(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.url}/${HttpApi.project_Get}/${id}`)
      .pipe(
        tap((project: IProject) => this.setCurrentProject(project)),
        map((project: IProject) => project)
      );
  }

  public get currentProjectSubjectValue(): IProject {
    return this.currentProjectSubject.getValue();
  }

  public get currentProjectValue(): Observable<IProject> {
    return this.currentProject;
  }

}
