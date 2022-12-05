import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { IUserDto } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url = `${environment.baseUrlUsers}`;

  constructor(
    private http: HttpClient
  ) { }

  public getUsersByIds(ids: number[]): Observable<IUserDto[]> {
    return this.http.post<IUserDto[]>(`${this.url}/${HttpApi.collaborators}/`, { id_users: ids });
  }

}
