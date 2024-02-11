import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';

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

  search(searchString:string){
    const data = {
      searchString:searchString
    }
    return this.http.post<Restaurant[]>(`${this.uri}/search`, data);
  }

  createReview(review:Review){
    const data = {
      review:review
    }

    return this.http.post<Restaurant>(`${this.uri}/createReview`, data);
  }

  getRestaurantReviews(restaurantUsername:string){
    const data = {
      restaurantUsername:restaurantUsername
    }

    return this.http.post<Review[]>(`${this.uri}/getRestaurantReviews`, data);
  }
}
