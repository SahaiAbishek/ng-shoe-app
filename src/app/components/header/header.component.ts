import { Component, Input, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: SocialUser;

  constructor(private socialAuthService: SocialAuthService) {
    
   }

  ngOnInit(): void {
    //console.log(this.user);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
