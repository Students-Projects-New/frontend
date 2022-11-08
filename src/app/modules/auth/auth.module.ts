import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { environment } from '@env/environment';

import { AuthRoutingModule } from './auth-routing.module';

const MODULES = [
  CommonModule,
  AuthRoutingModule,
  SocialLoginModule
];

const PROVIDERS = [
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
  }
];


@NgModule({
  declarations: [...AuthRoutingModule.components],
  imports: [...MODULES],
  providers: [...PROVIDERS]
})
export class AuthModule { }
