import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { IProject, IProjectDto } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient
  ) { }

  public projectValidateContext(context: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${HttpApi.project_Validate_Context}/${context}`);
  }

  public getProjects(id: number, tags?: any): Observable<IProject[]> {
    return this.http.post<IProject[]>(`${this.url}/${HttpApi.project_List}/${id}`, (tags) ? { params: tags } : {});
  }

  public createProject(project: FormData): Observable<IProject> {
    return this.http.post<IProject>(`${this.url}/${HttpApi.project_Create}/`, project);
  }

  public deployProject(project: IProjectDto): Observable<any> {
    return this.http.post<any>(`${this.url}/${HttpApi.project_Deploy}/`, project);
  }

  public deleteProject(project: IProjectDto): Observable<any> {
    return this.http.post<any>(`${this.url}/${HttpApi.project_Delete}`, { params: project });
  }

}
