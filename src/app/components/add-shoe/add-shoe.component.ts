import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { SocialUser } from 'angularx-social-login';
import { Shoe } from 'src/app/classes/shoe';
import { ShoeServiceService } from 'src/app/service/shoe-service.service';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  @Input() user: SocialUser;

  shoeform: FormGroup;
  shoe: Shoe;

  constructor(private formBuilder: FormBuilder, private shoeService: ShoeServiceService) {
    this.createShoeForm();
  }

  ngOnInit(): void {
  }

  createShoeForm() {
    this.shoeform = new FormGroup({
      brand: new FormControl(),
      model: new FormControl(),
      startDate: new FormControl(),
      size: new FormControl(),
      cushion: new FormControl(),
      shoeDrop: new FormControl(),

    });
  }

  onSubmit(data) {
    data.email = this.user.email;
    this.shoeService.addShoe(data).subscribe(s => this.shoe = s);
  }

}
