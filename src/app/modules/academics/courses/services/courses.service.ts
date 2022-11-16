import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { ICourse } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly url = `${environment.baseUrlAcademic}`;

  constructor(
    private http: HttpClient
  ) { }

  public getCourses(id: number): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.url}/${HttpApi.courses}/${id}`);
  }

}
