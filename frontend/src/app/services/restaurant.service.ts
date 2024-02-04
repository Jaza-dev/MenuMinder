import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  
  uri:string = 'http://localhost:4000/restaurant';

  register(restaurant:Restaurant){

    return this.http.post<String>(`${this.uri}/register`, restaurant);

  }
}
