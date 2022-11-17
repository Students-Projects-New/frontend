import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { IProject } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient
  ) { }

  public getProjects(id: string, tags?: any): Observable<IProject[]> {
    return this.http.post<IProject[]>(`${this.url}/${HttpApi.projectList}/${id}`, (tags) ? { params: tags } : {});
  }

  public createProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(`${this.url}/${HttpApi.projectList}`, project);
  }

  public deleteProject(project: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${HttpApi.projectDelete}`, project);
  }

}
