import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from '../classes/shoe';
import testFile from '../config/testFile';


@Injectable({
  providedIn: 'root'
})
export class ShoeServiceService {

  constructor() { }

  getMyShoes(): Observable<Shoe>[]{ 
    let jsonString = JSON.stringify(testFile.shoes);
    return JSON.parse(jsonString);
  }
}
