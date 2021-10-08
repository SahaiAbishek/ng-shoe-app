import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService
  ) { }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
