import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from 'src/app/classes/shoe';
import { ShoeServiceService } from 'src/app/service/shoe-service.service';

@Component({
  selector: 'app-view-shoes',
  templateUrl: './view-shoes.component.html',
  styleUrls: ['./view-shoes.component.css']
})
export class ViewShoesComponent implements OnInit {

  shoes: Observable<Shoe>[];
  constructor(private shoeService: ShoeServiceService) { }

  ngOnInit(): void {
    this.shoes = this.shoeService.getMyShoes();
    console.log(this.shoes.length);
  }

}
