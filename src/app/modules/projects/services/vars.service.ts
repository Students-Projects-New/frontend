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
    return this.http.get<IVar[]>(`${this.url}/${HttpApi.var_List}/${idUser}/${idProject}`);
  }

  public addVar(newVar: IVar): Observable<IVar> {
    return this.http.post<IVar>(`${this.url}/${HttpApi.var_Create}/`, JSON.stringify(newVar));
  }

  public updateVar(updateVar: IVar): Observable<IVar> {
    return this.http.put<IVar>(`${this.url}/${HttpApi.var_Update}/`, JSON.stringify(updateVar));
  }

  public deleteVar(idVar: number): Observable<IVar> {
    return this.http.delete<IVar>(`${this.url}/${HttpApi.var_Delete}/${idVar}`);
  }

}
