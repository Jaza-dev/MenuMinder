import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  restaurant:Restaurant = new Restaurant();
  menus:Menu[] = [];

  constructor(private menuService:MenuService){}

  ngOnInit(): void {
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);
    this.getRestaurantMenus();
  }

  formatDate(dateString: Date): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
  
    return `${day}.${month}.${year}.`;
  }

  getRestaurantMenus(){
    this.menuService.getRestaurantMenus(this.restaurant._id).subscribe(
      (resp:any)=>{
        this.menus = resp['message'];
      }
    )
  }

}
