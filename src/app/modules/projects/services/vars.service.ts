import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { IVar } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class VarsService {

  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient
  ) { }

  public getVars(idUser: number, idProject: number): Observable<IVar[]> {
    return this.http.get<IVar[]>(`${this.url}/${HttpApi.environment_List}/${idUser}/${idProject}`);
  }

}
