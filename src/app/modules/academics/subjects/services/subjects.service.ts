import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { ISubject } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private readonly url = `${environment.baseUrlAcademic}`;

  constructor(
    private http: HttpClient
  ) { }

  public getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(`${this.url}/${HttpApi.subjects}/`);
  }

  public getSubject(id: number): Observable<ISubject> {
    return this.http.get<ISubject>(`${this.url}/${HttpApi.subjects}/${id}/`);
  }

  public createSubject(subject: ISubject[]): Observable<ISubject[]> {
    return this.http.post<ISubject[]>(`${this.url}/${HttpApi.subjects}/`, subject);
  }

  public updateSubject(subject: ISubject): Observable<ISubject> {
    return this.http.put<ISubject>(`${this.url}/${HttpApi.subjects}/${subject.id}/`, subject);
  }

  public deleteSubject(id: number): Observable<ISubject> {
    return this.http.delete<ISubject>(`${this.url}/${HttpApi.subjects}/${id}/`);
  }

}
