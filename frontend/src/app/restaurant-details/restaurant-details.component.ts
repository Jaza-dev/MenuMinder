import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent  implements OnInit  {

  restaurant:Restaurant = new Restaurant();
  restaurantDetails:Restaurant = new Restaurant();

  constructor(private restaurantService:RestaurantService, private route:ActivatedRoute){}

  ngOnInit(): void {    
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);

    const _id = this.route.snapshot.queryParamMap.get('_id');
    if(_id !== null)
      this.getRestaurant(_id);
  }

  getRestaurant(_id:string){
    this.restaurantService.getRestaurant(_id).subscribe(
      (resp:any)=>{
        this.restaurantDetails = resp['message'];
      }
    )
  }
}
