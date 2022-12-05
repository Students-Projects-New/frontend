import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpApi } from '@core/http/http-api';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DeploymentsService {

  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient
  ) { }

  public getDeploymentsByProject(idProject: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${HttpApi.deployments_Project}/${idProject}`);
  }

}
