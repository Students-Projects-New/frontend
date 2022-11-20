import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { environment } from '@env/environment';
import { HttpTokenInterceptor } from '@core/interceptors/http-token.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';
import * as CoreComponents from '@core/components';

const MODULES = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  SharedModule
];

const PROVIDERS = [
  CookieService,
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(environment.oauth.googleClientId)
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  },
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
