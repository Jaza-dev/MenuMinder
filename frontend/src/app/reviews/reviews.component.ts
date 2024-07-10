import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  restaurant:Restaurant = new Restaurant();
  reviews:Review[] = [];

  constructor(private restaurantService:RestaurantService, private route:ActivatedRoute){}

  ngOnInit(): void {
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);
    this.getRestaurantReviews();
  }

  getRestaurantReviews(){
    this.restaurantService.getRestaurantReviews(this.restaurant.username).subscribe(
      (resp:any)=>{
        this.reviews=resp['message'];
      }
    )
  }

  formatDate(dateString: Date): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
  
    return `${day}.${month}.${year}.`;
  }
}
