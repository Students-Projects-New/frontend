import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { ICourseStudent } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  private readonly url = `${environment.baseUrlAcademic}`;

  constructor(
    private http: HttpClient
  ) { }

  getCoursesStudent(id: number): Observable<ICourseStudent[]> {
    return this.http.get<ICourseStudent[]>(`${this.url}/${HttpApi.courses_Student}/${id}`);
  }

}
