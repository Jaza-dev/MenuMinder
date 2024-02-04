import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private restaurantService:RestaurantService, private router:Router){}

  username:string="";
  password:string="";

  message:string="";

  login(){
    this.restaurantService.login(this.username,this.password).subscribe(
      (resp:any)=>{
        if(resp['message'] === "Successful login."){
          sessionStorage.setItem("restaurant", JSON.stringify(resp['restaurant']));
          this.router.navigate(["home"]);
        }else{
          this.message = resp['message'];
        }
      }
    )
  }

  resetMessage(){
    this.message="";
  }

}
