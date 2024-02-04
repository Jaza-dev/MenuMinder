import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  restaurant:Restaurant = new Restaurant();

  constructor(private restaurantService:RestaurantService, private route:ActivatedRoute){}

  ngOnInit(): void {
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);
  }
}
