import express from 'express'
import RestaurantModel from '../models/restaurant'
import ReviewModel from '../models/review'
import { Utility } from '../helpers/utility';


export class RestaurantController{

  getAllRestaurants = async (req:express.Request, res:express.Response)=>{

    const restaurants = await RestaurantModel.find( {} );

    return res.json({"message":restaurants});

  }

  register = async (req:express.Request, res:express.Response)=>{

    const username  = req.body.username;
    let restaurant = await RestaurantModel.findOne( {username} );
  
    if (restaurant) {
      return res.json({ message: "Restaurant with that username already exists." });
    }

    const password = req.body.password;

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
    const password = req.body.password;


    const restaurant = await RestaurantModel.findOne( {username} );

    if (restaurant && restaurant.password !== null && restaurant.password !== undefined) {
      const utility = new Utility();
      const isMatch = await utility.comparePasswords(password, restaurant.password);
      if(isMatch)
        return res.json({ message: "Successful login.", restaurant: restaurant });
    }

    return res.json({ message: "Username or password are incorrect." });
  }

  getRestaurant = async (req:express.Request, res:express.Response)=>{
    
    const _id = req.body._id;

    const restaurant = await RestaurantModel.findOne({ _id });

    res.json({ message: restaurant });
  } 

  search = async (req:express.Request, res:express.Response)=>{

    const searchString = req.body.searchString;
    const regex = new RegExp(searchString, 'i');
    const restaurants = await RestaurantModel.find({ name: regex });

    res.json({message:restaurants});

  }

  createReview = async (req:express.Request, res:express.Response)=>{

    await new ReviewModel({
      restaurantUsername: req.body.review.restaurantUsername,
      userEmail: req.body.review.userEmail,
      rating: req.body.review.rating,
      comment: req.body.review.comment,
      date: new Date(new Date().setHours(new Date().getHours() + 1))
    }).save();
    
    const reviews = await ReviewModel.find({ "restaurantUsername": req.body.review.restaurantUsername });

    let numberOfReviews = 0;
    let rating = 0;

    reviews.forEach(review=> {
      numberOfReviews++;
      if(review.rating)
        rating+=review.rating
    });

    if(numberOfReviews!==0)
      rating = Number((rating/numberOfReviews).toFixed(1))
    const restaurant = await RestaurantModel.updateOne({
      'restaurantUsername': req.body.restaurantUsername}, 
      {$set: {'rating': rating, 'numberOfReviews':numberOfReviews}});

    res.json({"message":restaurant});
  }

  getRestaurantReviews = async (req:express.Request, res:express.Response)=>{
  
    const reviews = await ReviewModel.find({"restaurantUsername":req.body.restaurantUsername});

    res.json({"message":reviews});

  }

}