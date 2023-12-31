import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '@core/authentication';
import { HttpError } from '@data/models';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.authService.logout();
            this.router.navigate(['/auth/login']);
            break;
          case 403 || 404 || 500:
            this.router.navigate(['/not-found']);
            break;
        }
        
        let customError: HttpError;
        try {
          customError = HttpError.fromJSON(error.error);
        } catch (e) {
          customError = new HttpError('Unknown', 'Unknown', 'Unknown');
        }
        return throwError(() => customError);
      }));
  }
}
