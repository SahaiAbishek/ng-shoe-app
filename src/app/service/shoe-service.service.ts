import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Shoe } from '../classes/shoe';
import testFile from '../config/testFile';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShoeServiceService {

  private baseURL = 'http://localhost:8081/shoeApp';

  constructor(private httpClient: HttpClient) { }

  getMyShoes(email: string): Observable<Shoe[]> {
    const getByEmailURL = `${this.baseURL}/shoes/${email}`;
    // return this.httpClient.get<GetResponseShoes>(getByEmailURL).pipe(
    //   map(response => response._embedded.shoes)
    // );
    return this.httpClient.get<Shoe[]>(getByEmailURL);
  }

  addShoe(shoe: Shoe): Observable<Shoe> {
    const headers = { 'content-type': 'application/json' }
    const addURL = `${this.baseURL}/shoes`
    return this.httpClient.post<Shoe>(addURL, shoe, { 'headers': headers });
  }
}

interface GetResponseShoes {
  _embedded: {
    shoes: Shoe[];
  }
}
