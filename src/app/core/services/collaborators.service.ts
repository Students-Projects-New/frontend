import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpApi } from '@core/http/http-api';
import { IDictionary, IUserDto } from '@data/interfaces';
import { environment } from '@env/environment';

import { ToastrService } from 'ngx-toastr';

import { AlertsService } from './alerts/alerts.service';  
import { ErrorHandlerInterceptor } from '../interceptors/error-handler.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  private readonly url = `${environment.baseUrlUsers}`;
  private contributorSubject: BehaviorSubject<Record<number, IUserDto>>;
  public readonly contributors: Observable<Record<number, IUserDto>>;

  constructor(private http: HttpClient, private toastr: ToastrService, private handleError: AlertsService, private alertService: AlertsService) {
    this.contributorSubject = new BehaviorSubject<Record<number, IUserDto>>(JSON.parse(localStorage.getItem('contributors') || '{}') as Record<number, IUserDto>);
    this.contributors = this.contributorSubject.asObservable();
  }

  public setContributors(ids: number[]): Observable<IUserDto[]> {
     return this.http.post<IUserDto[]>(`${this.url}/${HttpApi.collaborators}/`, { id_users: ids })
      .pipe(
        tap((contributors: IUserDto[]) => {
          const contributorsDict: Record<number, IUserDto> = {};
          contributors.forEach((contributor: IUserDto) => {
            contributorsDict[contributor.id] = contributor;
          });
          localStorage.setItem('contributors', JSON.stringify(contributorsDict));
          this.contributorSubject.next(contributorsDict);
        }),
        catchError((error: any) => {
          console.error('Error:', error);
          this.alertService.handleAlerts(' ', '');
          // this.toastr.error('Ocurrió un error al cargar los contributors.', 'Error');
          return throwError(error);
        })
      );   
    
  }

  get contributorsSubjectValue(): Record<number, IUserDto> {
    return this.contributorSubject.getValue();
  }

  get currentContributors(): Observable<Record<number, IUserDto>> {
    return this.contributors;
  }

  public clearContributors(): void {
    this.contributorSubject.next({});
  }

}
