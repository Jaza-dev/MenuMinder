import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private router:Router, private restaurantService:RestaurantService) {}

  @Input() restaurant:Restaurant = new Restaurant();
  @Output() result = new EventEmitter<Restaurant[]>();
  searchString:string = "";
  searchResult:Restaurant[] = [];

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  search(){
    this.restaurantService.search(this.searchString).subscribe(
      (resp:any)=>{
        this.searchResult=resp['message'];
        this.result.emit(this.searchResult);
        this.router.navigate(['/home']);
      }
    )
  }
}
