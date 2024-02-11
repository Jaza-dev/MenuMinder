import { Menu } from "./menu";

export class Restaurant{

    _id:string = "";

    username:string = "";

    password:string = "";
    
    name:string = "";

    description:string = "";

    address:string = "";

    phone:string = "";

    email:string = "";

    images:string[] = [];

    rating:number = 0;

    numberOfReviews:number=0;

    dateOfRegistration:Date = new Date(new Date().setHours(new Date().getHours()+1));
    
}