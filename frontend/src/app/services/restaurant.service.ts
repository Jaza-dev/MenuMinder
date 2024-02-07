import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  
  uri:string = 'http://localhost:4000/restaurant';

  getAllRestaurants(){

    return this.http.get<Restaurant[]>(`${this.uri}/getAllRestaurants`);
    
  }

  register(restaurant:Restaurant){

    return this.http.post<String>(`${this.uri}/register`, restaurant);

  }

  login(username:string, password:string){

    const data = {
      username:username,
      password:password
    }

    return this.http.post<Restaurant>(`${this.uri}/login`, data);

  }

  getRestaurant(_id:string){

    const data = {
      _id:_id
    }

    return this.http.post<Restaurant>(`${this.uri}/getRestaurant`, data);
  }
}
