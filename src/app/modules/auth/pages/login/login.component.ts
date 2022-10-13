import { Component, OnInit } from '@angular/core';

import { SocialAuthService, GoogleLoginProvider, SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  socialUser!: SocialUser;
  isLoggedin?: boolean;

  constructor(
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data: SocialUser) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

}
