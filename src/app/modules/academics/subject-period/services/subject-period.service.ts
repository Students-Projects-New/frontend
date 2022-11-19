import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { ISubjectPeriod, ICourse } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectPeriodService {

  private readonly url = `${environment.baseUrlAcademic}`;

  constructor(
    private http: HttpClient
  ) { }

  public getSubjectsPeriod(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.url}/${HttpApi.subjectsPeriod}/`);
  }

  public createSubjectPeriod(subjectPeriod: ISubjectPeriod[]): Observable<ICourse[]> {
    return this.http.post<ICourse[]>(`${this.url}/${HttpApi.subjectsPeriod}/`, subjectPeriod);
  }

  public deleteSubjectPeriod(id: number): Observable<ISubjectPeriod> {
    return this.http.delete<ISubjectPeriod>(`${this.url}/${HttpApi.subjectsPeriod}/${id}/`);
  }

}
