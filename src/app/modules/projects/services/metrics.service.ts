import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpApi } from '@core/http/http-api';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  private readonly url = `${environment.baseUrlProjects}`;

  constructor(
    private http: HttpClient
  ) { }

  getMetrics(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${HttpApi.metrics_Project}/${id}`);
  }

}