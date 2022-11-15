import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CookieService } from 'ngx-cookie-service';
import { environment } from '@env/environment';
import { HttpApi } from '@core/http/http-api';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '@data/models';
import { IToken } from '@data/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = `${environment.baseUrlAuth}`;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private jwtHelper: JwtHelperService;
  private token: any;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}') as User);
    this.currentUser = this.currentUserSubject.asObservable();
    this.jwtHelper = new JwtHelperService();
  }

  public getCurrentUserSubject(): User {
    return this.currentUserSubject.getValue();
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  public isLoggedIn(): boolean {
    return this.cookieService.check('access_token');
  }

  get accessToken() {
    return this.cookieService.get('access_token');
  }

  get refreshToken() {
    return this.cookieService.get('refresh_token');
  }

  public signIn(data: any): Observable<IToken> {
    return this.http.post<IToken>(`${this.url}/${HttpApi.oauthToken}`, JSON.stringify(data))
      .pipe(
        tap((res: IToken) => {
          this.token = this.jwtHelper.decodeToken(res.access);
          this.cookieService.set('access_token', res.access, new Date(this.token.exp * 1000), '/');
          this.cookieService.set('refresh_token', res.refresh, new Date(this.token.exp * 1000), '/');
          localStorage.setItem('currentUser', JSON.stringify(this.token.user));
          this.currentUserSubject.next(this.token.user);
        }),
        catchError(this.handleError)
      );
  }

  public logout(): void {
    localStorage.clear();
    this.cookieService.delete('access_token', '/');
    this.cookieService.delete('refresh_token', '/');
    this.currentUserSubject = new BehaviorSubject<User>({} as User);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public loginWithRefreshToken(): Observable<any> {
    return this.http.post<any>(`${this.url}/${HttpApi.oauthRefreshToken}`, { refresh_token: this.cookieService.get('refresh_token') })
      .pipe(
        tap((res) => {
          this.cookieService.set('access_token', res.access_token);
          this.cookieService.set('refresh_token', res.refresh_token);
        }),
        catchError(this.handleError)
      );
  }

  public handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }

}
