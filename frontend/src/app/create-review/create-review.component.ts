import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent {

  @Input() restaurantUsername:string = "";
  review:Review = new Review();
  successMessage:string = "";
  errorMessage:string="";

  constructor(private restaurantService:RestaurantService){}

  createReview(){
    if(this.review.userEmail===""){
      this.errorMessage = "Please enter your e-mail.";
      return;
    }
    this.review.restaurantUsername=this.restaurantUsername;
    this.restaurantService.createReview(this.review).subscribe(
      (resp:any)=>{
        if(resp["message"]!==null){
          this.successMessage = "Thank you for the review!";
        }
      }
    )
  }
  
}
