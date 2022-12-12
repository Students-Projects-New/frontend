import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { IDatabase } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  private readonly url = `${environment.baseUrlUsers}`;

  constructor(
    private http: HttpClient
  ) { }

  getDatabases(idUser: number): Observable<IDatabase[]> {
    return this.http.get<IDatabase[]>(`${this.url}/${HttpApi.database_List}/`)
      .pipe(
        map((databases: IDatabase[]) => databases.filter(database => database.id_user === idUser))
      );
  }

  createUserSGDB(password: string): Observable<any> {
    return this.http.post<any>(`${this.url}/${HttpApi.database_Create_User}/`, JSON.stringify({ password }));
  }

  createDatabase(context: string, id_type: number): Observable<IDatabase> {
    return this.http.post<IDatabase>(`${this.url}/${HttpApi.database_Create}/`, JSON.stringify({ context, id_type }));
  }

  deleteDatabase(idDatabase: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${HttpApi.database_Delete}/${idDatabase}`);
  }

  public getSearchDatabaseContext(context: string): Observable<IDatabase> {
    return this.http.get<IDatabase>(`${this.url}/${HttpApi.database_Search}/${context}`);
  }

}
