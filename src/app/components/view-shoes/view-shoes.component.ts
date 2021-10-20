import { Component, Input, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { Shoe } from 'src/app/classes/shoe';
import { ShoeServiceService } from 'src/app/service/shoe-service.service';

@Component({
  selector: 'app-view-shoes',
  templateUrl: './view-shoes.component.html',
  styleUrls: ['./view-shoes.component.css']
})
export class ViewShoesComponent implements OnInit {

  @Input() user: SocialUser;

  shoes: Shoe[];
  constructor(private shoeService: ShoeServiceService) { }

  ngOnInit(): void {
    this.shoeService.getMyShoes(this.user.email).subscribe(
      data => {
        this.shoes = data;
      }
    );
  }

}
