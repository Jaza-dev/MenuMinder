import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private restaurantService:RestaurantService, private router:Router){}

  restaurant:Restaurant = new Restaurant();
  next:boolean = false;

  message:string = "";

  handleFileInput(event: any) {
    const files: FileList = event.target.files;
  
    const promises: Promise<string>[] = [];
  
    for (let i = 0; i < files.length; i++) {
      promises.push(this.readFileAsBase64(files[i]));
    }
  
    Promise.all(promises).then((base64Strings: string[]) => {
      this.restaurant.images = base64Strings;
    });
  }
  
  readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
  
      reader.onerror = (event: any) => {
        reject(event.target.error);
      };
  
      reader.readAsDataURL(file);
    });
  }

  nextPage(){
    if(!this.checkUsernameFormat(this.restaurant.username)){
      this.message="Username is not in correct format."
      return;
    }
    if(!this.checkPasswordFormat(this.restaurant.password)){
      this.message="Password is not in correct format."
      return;
    }
    if(this.restaurant.name === ""){
      this.message="Name is required."
      return;
    }
    this.next = this.next ? false : true;
  }

  checkPasswordFormat(password:string){
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d.*\d.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  }

  checkEmailFormat(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  checkPhoneNumberFormat(phoneNumber: string): boolean {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  }

  checkUsernameFormat(username: string): boolean {
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    return usernamePattern.test(username);
  }

  checkAddressFormat(address: string): boolean {
    const addressPattern = /^[a-zA-Z0-9\s\-,.'#]{1,100}$/;
    return addressPattern.test(address);
  }

  register(){

    if(!this.checkAddressFormat(this.restaurant.address)){
      this.message="Address is not in correct format."
      return;
    }
    if(!this.checkPhoneNumberFormat(this.restaurant.phone)){
      console.log(this.restaurant.phone)
      this.message="Phone is not in correct formata."
      return;
    }
    if(!this.checkEmailFormat(this.restaurant.email)){
      this.message="E-mail is not in correct format."
      return;
    }
    if(this.restaurant.images.length===0){
      this.message="Please add at least one image."
      return;
    }

    this.restaurantService.register(this.restaurant).subscribe(
      (resp:any)=>{
        this.message = resp['message'];
        if(this.message==="Restaurant created successfully."){
          this.router.navigate(['']);
        }
      }
    )
  }

  resetMessage(){
    this.message=""
  }

}
