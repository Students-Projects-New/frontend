import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { AuthService } from '@core/authentication/auth.service';
import { IToken } from '@data/interfaces';

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

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      if (user) {
        this.sendGoogleToken(user);
      }
    });
  }

  public sendGoogleToken(socialUser: SocialUser) {
    this.authService.signIn(socialUser.idToken).subscribe((token: IToken) => {
      if (token) {
        this.router.navigate(['/account/profile']);
      }
      this.socialAuthService.signOut();
    });
  }

}
