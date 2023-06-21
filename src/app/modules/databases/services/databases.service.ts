import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { IDatabase } from '@data/interfaces';
import { environment } from '@env/environment';

import { AlertsService } from '@app/core/services/alerts/alerts.service';
import { E } from 'chart.js/dist/chunks/helpers.core';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  private readonly url = `${environment.baseUrlUsers}`;

  constructor(
    private http: HttpClient,
    private alertsService: AlertsService
  ) { }

  getDatabases(idUser: number): Observable<IDatabase[]> {
    return this.http.get<IDatabase[]>(`${this.url}/${HttpApi.database_List}/`)
      .pipe(
        map((databases: IDatabase[]) => databases.filter(database => database.id_user === idUser))
      );
  }

  
  createUserSGDB(password: string): Observable<any> {
    this.alertsService.handleAlerts('¡Usuario creado con éxito!','success');
    return this.http.post<any>(`${this.url}/${HttpApi.database_Create_User}/`, JSON.stringify({ password }))
    .pipe(
      catchError((error:any) =>{
        this.alertsService.handleAlerts('¡Error al crear el usuario!','error');
        return throwError(error);
      })
    );
  }

  createDatabase(context: string, id_type: number): Observable<IDatabase> {
    this.alertsService.handleAlerts('¡Base de datos creada con éxito!','success');
    return this.http.post<IDatabase>(`${this.url}/${HttpApi.database_Create}/`, JSON.stringify({ context, id_type }))
    .pipe(
      // tap((res:any)=>{
      //   this.alertsService.handleAlerts('¡Base de datos creada con éxito!','success');
      // }),
      catchError((error:any) =>{
        this.alertsService.handleAlerts('¡Error al crear la base de datos!','error');
        return throwError(error);
      })
    );
  }

  deleteDatabase(idDatabase: number): Observable<any> {
    this.alertsService.handleAlerts('¡Base de datos eliminada con éxito!','success');
    return this.http.delete<any>(`${this.url}/${HttpApi.database_Delete}/${idDatabase}`)
    .pipe(
      // tap((res:any)=>{
      //   this.alertsService.handleAlerts('¡Base de datos creada con éxito!','success');
      // }),
      catchError((error:any) =>{
        this.alertsService.handleAlerts('¡Error al eliminar la base de datos!','error');
        return throwError(error);
      })
    );
  }

  public getSearchDatabaseContext(context: string): Observable<IDatabase> {
    this.alertsService.handleAlerts('¡Búsqueda exitosa!','success');
    return this.http.get<IDatabase>(`${this.url}/${HttpApi.database_Search}/${context}`)
    .pipe(
      // tap((res:any)=>{
      //   this.alertsService.handleAlerts('¡Búsqueda exitosa!','success');
      // }),
      catchError((error:any) =>{
        this.alertsService.handleAlerts('¡Error al buscar la base de datos!','error');
        return throwError(error);
      })
    );
  }

}
