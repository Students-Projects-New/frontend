import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { IDatabase, ITypeDatabase } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseTypesService {

  private info: ITypeDatabase[] = [
    {
      id: 1,
      type: 'PostgreSQL',
      image: 'https://oneclickapps.caprover.com/v4/logos/postgres.png',
      description: 'PostgreSQL, también conocido como Postgres, es un sistema de administración de bases de datos relacionales gratuito y de código abierto que enfatiza la extensibilidad y el cumplimiento de SQL.',
      link: 'https://becl.me/pgadmin4/'
    },
    {
      id: 2,
      type: 'MySQL',
      image: 'https://oneclickapps.caprover.com/v4/logos/mariadb.png',
      description: 'MariaDB es una bifurcación desarrollada por la comunidad del sistema de administración de bases de datos relacionales MySQL que pretende permanecer libre bajo la GPL de GNU.',
      link: 'https://becl.me/phpmyadmin/index.php'
    }
  ];

  private readonly url = `${environment.baseUrlUsers}`;

  constructor(
    private http: HttpClient,
  ) { }

  public getDatabaseTypes(): Observable<ITypeDatabase[]> {
    return this.http.get<ITypeDatabase[]>(`${this.url}/${HttpApi.database_Types_List}/`)
      .pipe(
        map((databases: ITypeDatabase[]) => {
          return databases.map((database: ITypeDatabase) => {
            database.image = this.info.find((info: ITypeDatabase) => info.id === database.id)?.image || '';
            database.description = this.info.find((info: ITypeDatabase) => info.id === database.id)?.description || '';
            return database;
          });
        })
      );
  }

}
