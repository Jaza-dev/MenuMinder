import express from 'express'
import RestaurantModel from '../models/restaurant'
import { Utility } from '../helpers/utility';


export class RestaurantController{

    register = async (req:express.Request, res:express.Response)=>{

      const username  = req.body.username;
      let restaurant = await RestaurantModel.findOne( {username} );
    
      if (restaurant) {
        return res.json({ message: "Restaurant with that username already exists." });
      }

      let password = req.body.password;

      const utility = new Utility();
      const hashedPassword = await utility.hashPassword(password);
    
    
      restaurant = await new RestaurantModel({
        username:req.body.username,
        password:hashedPassword,
        name:req.body.name,
        description:req.body.description,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        images:req.body.images,
        rating:0,
        numberOfReviews:0,
        dateOfRegistration: new Date(new Date().setHours(new Date().getHours()+1))
      }).save();

      return res.json({ message: "Restaurant created successfully." });

    }

    login = async (req:express.Request, res:express.Response)=>{

      const username  = req.body.username;
      let password = req.body.password;

      
      const utility = new Utility();
      const hashedPassword = await utility.hashPassword(password);

      let restaurant = await RestaurantModel.findOne( {username, "password":hashedPassword} );

      if (!restaurant) {
        return res.json({ message: "Username or password are incorrect." });
      }

      return res.json({ message: "Successful login." });
    }

}