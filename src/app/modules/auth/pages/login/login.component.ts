import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, GoogleLoginProvider, SocialUser } from "@abacritt/angularx-social-login";
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  public signInWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data: SocialUser) => {
        this.signIn(data);
        console.log(data);
      }).catch((error) => {
        console.log(error);
      });
  }

  public signIn(data: SocialUser) {
    this.authService.login(data.idToken);
    this.router.navigate(['/account/profile']);
  }

}
