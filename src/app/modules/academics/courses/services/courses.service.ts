import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  private get currentValue(): number {
    return Math.floor(Math.random() * 20) + 1;
  }

  public getCourses(id: number): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.url}/${HttpApi.courses_Teacher}/${id}`)
      .pipe(
        map((courses: ICourse[]) => {
          return courses.map((course: ICourse) => {
            course.image = `assets/img/courses/${this.currentValue}.svg`;
            return course;
          });
        })
      );
  }

}
