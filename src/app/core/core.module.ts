import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { HttpTokenInterceptor } from '@core/interceptors/http-token.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';
import * as CoreComponents from '@core/components';

const MODULES = [
  CommonModule,
  HttpClientModule,
  RouterModule
];

const PROVIDERS = [
  CookieService,
  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
];


@NgModule({
  declarations: [...CoreComponents.components],
  imports: [...MODULES],
  providers: [...PROVIDERS],
  exports: [...CoreComponents.components]
})
export class CoreModule { }
