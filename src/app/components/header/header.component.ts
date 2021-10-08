import { Component, Input, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: string;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.user);
  }

}
