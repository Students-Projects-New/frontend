import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { AuthService } from '@core/authentication';
import { ITokenDto, IToken } from '@data/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  private tokenDto: ITokenDto = {} as ITokenDto;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signInWithGoogle();
  }

  public signInWithGoogle(): void {
    this.socialAuthService.authState
      .subscribe((user: SocialUser) => {
        if (user) {
          this.tokenDto.token = user.idToken;
          this.sendGoogleToken(this.tokenDto);
        }
      });
  }

  public sendGoogleToken(data: ITokenDto): void {
    this.authService.signIn(data)
      .subscribe((token: IToken) => {
        if (token) {
          this.router.navigate(['/account/profile']);
        }
        this.socialAuthService.signOut();
      });
  }

}
