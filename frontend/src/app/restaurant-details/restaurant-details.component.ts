import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { Review } from '../models/review';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent  implements OnInit  {

  restaurant:Restaurant = new Restaurant();
  restaurantDetails:Restaurant = new Restaurant();
  menus:Menu[] = [];
  selectedMenu:number = 0;
  reviews:Review[] = [];

  constructor(private restaurantService:RestaurantService, private menuService:MenuService, private route:ActivatedRoute){}

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
        this.getRestaurantMenus();
        this.getRestaurantReviews();
      }
    )
  }

  getRestaurantMenus(){
    this.menuService.getRestaurantMenus(this.restaurantDetails._id).subscribe(
      (resp:any)=>{
        this.menus = resp['message'];
      }
    )
  }

  show(i:number){
    this.selectedMenu=i;
  }

  getRestaurantReviews(){
    this.restaurantService.getRestaurantReviews(this.restaurantDetails.username).subscribe(
      (resp:any)=>{
        this.reviews = resp["message"];
      }
    )
  }
}
