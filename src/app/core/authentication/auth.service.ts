import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { environment } from '@env/environment';
import { HttpApi } from '@core/http/http-api';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ITokenDto, IToken } from '@data/interfaces';
import { ROLE } from '@data/enums/role.enum';
import { User } from '@data/models';

import { AlertsService } from '../services/alerts/alerts.service';  


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
    private cookieService: CookieService,
    private router: Router,
    private alertsService: AlertsService
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

  public set currentUserValue(user: User) {
    this.currentUserSubject.next(user);
  }

  public isLoggedIn(): boolean {
    // return this.cookieService.check('access_token');
    return true;
  }

  get accessToken() {
    return this.cookieService.get('access_token');
  }

  get refreshToken() {
    return this.cookieService.get('refresh_token');
  }

  
  public signIn(data: ITokenDto): Observable<IToken> {
    return this.http.post<IToken>(`${this.url}/${HttpApi.oauth_Token}/`, JSON.stringify(data))
      .pipe(
        tap((res: IToken) => {
          this.autoSignIn(res);
          this.alertsService.handleAlerts('¡Inicio de Sesión exitoso!', 'success');
        }),
        catchError((err: any) => {
          this.alertsService.handleAlerts('¡Ocurrió un error inesperado en el inicio de sesión!', 'error');
          return throwError(err);
        })
      ) as Observable<IToken>; 
  }

  private autoSignIn(token: IToken) {
    this.token = this.jwtHelper.decodeToken(token.access);
    this.cookieService.set('access_token', token.access, new Date(this.token.exp * 1800000), '/');
    this.cookieService.set('refresh_token', token.refresh, new Date(this.token.exp * 1000), '/');
    localStorage.setItem('currentUser', JSON.stringify(this.token.user));
    this.currentUserSubject.next(this.token.user);
    this.detectUserActivity();
    this.autoRefreshToken((new Date(this.token.exp * 1000).getTime()) - (new Date().getTime()));
  }

  public isStudent(): boolean {
    return this.hasRole([ROLE.STUDENT]);
  }

  public isTeacher(): boolean {
    return this.hasRole([ROLE.TEACHER]);
  }

  public isAdmin(): boolean {
    return this.hasRole([ROLE.ADMIN]);
  }

  private detectUserActivity(): void {
    const timeout = new Date(this.token.exp * 1000).getTime() - new Date().getTime();
    window.addEventListener('mousemove', () => {
      this.autoLogout(timeout);
    });
  }

  private autoLogout(expirationDuration: number): void {
    setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  public logout(): void {
    localStorage.clear();
    this.cookieService.delete('access_token', '/');
    this.cookieService.delete('refresh_token', '/');
    this.currentUserSubject = new BehaviorSubject<User>({} as User);
    this.currentUser = this.currentUserSubject.asObservable();
    this.router.navigate(['/home']);
  }

  private autoRefreshToken(expirationDuration: number = 300000): void {
    let refreshInterval = setInterval(() => {
      if (this.isLoggedIn()) {
        if (this.jwtHelper.isTokenExpired(this.accessToken)) {
          this.loginWithRefreshToken().subscribe();
        }
      } else {
        clearInterval(refreshInterval);
      }
    }, expirationDuration);
  }

  public loginWithRefreshToken(): Observable<IToken> {
    const data = { refresh: this.refreshToken };
    return this.http.post<IToken>(`${this.url}/${HttpApi.oauth_Refresh_Token}/`, JSON.stringify(data))
      .pipe(
        tap((res: IToken) => {
          this.token = this.jwtHelper.decodeToken(res.access);
          this.cookieService.set('access_token', res.access, new Date(this.token.exp * 1000), '/');
          localStorage.setItem('currentUser', JSON.stringify(this.token.user));
          this.currentUserSubject.next(this.token.user);
          this.detectUserActivity();
          this.autoRefreshToken(new Date(this.token.exp * 1000).getTime() - new Date().getTime());
        }),
        catchError(this.handleError)
      );
  }

  public hasRole(roles: ROLE[]): boolean {
    return this.getCurrentUserSubject().roles.some((role) => roles.includes(role.name));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }

}
