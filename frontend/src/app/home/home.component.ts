import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurant:Restaurant = new Restaurant();
  allRestaurants:Restaurant[] = [];

  constructor(private restaurantService:RestaurantService, private route:ActivatedRoute){}

  ngOnInit(): void {
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);

    this.getAllRestaurants();
  }

  getAllRestaurants(){
    this.restaurantService.getAllRestaurants().subscribe(
      (resp:any)=>{
        this.allRestaurants = resp['message']
      }
    )
  }

}
