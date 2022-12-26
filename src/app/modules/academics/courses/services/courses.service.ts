import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { ICourse } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private currentCourseSubject = new BehaviorSubject<ICourse>({} as ICourse);
  public readonly currentCourse = this.currentCourseSubject.asObservable();
  private readonly url = `${environment.baseUrlAcademic}`;

  constructor(
    private http: HttpClient
  ) { }

  private get currentValue(): number {
    return Math.floor(Math.random() * 20) + 1;
  }

  private setCurrentCourse(course: ICourse): void {
    this.currentCourseSubject.next(course);
  }

  public getCourses(id: number): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.url}/${HttpApi.courses_Teacher}/${id}`)
      .pipe(
        map((courses: ICourse[]) => {
          return courses.map((course: ICourse) => {
            course.image = `students-projects/assets/img/courses/${this.currentValue}.svg`;
            return course;
          });
        })
      );
  }

  public getCourseById(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.url}/${HttpApi.course}/${id}`)
      .pipe(
        tap((course: ICourse) => this.setCurrentCourse(course)),
        map((course: ICourse) => course)
      );
  }

  public setEnrollStudentCourse(id_subject_period: number, students: number[]): Observable<any> {
    return this.http.post<any>(`${this.url}/${HttpApi.subjects_Student}/`, JSON.stringify({ id_subject_period, students }));
  }

  public getStudentsEnrolledCourse(id: number): Observable<ICourse[]> {
    return this.http.get<any[]>(`${this.url}/${HttpApi.course_Students_Enrolled}/${id}`);
  }

  public get currentCourseSubjectValue(): ICourse {
    return this.currentCourseSubject.getValue();
  }

  public get currentCourseValue(): Observable<ICourse> {
    return this.currentCourse;
  }

}
