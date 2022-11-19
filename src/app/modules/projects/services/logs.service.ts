import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient
  ) { }

  public getBuildLogs(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${HttpApi.logsProject}/${id}/BUILD`);
  }

  public getDeployLogs(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${HttpApi.logsProject}/${id}/CONT`);
  }

}
