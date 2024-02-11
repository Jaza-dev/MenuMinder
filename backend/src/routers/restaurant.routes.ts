import express from 'express'
import { RestaurantController } from '../controllers/restaurant.controller';

const restaurantRouter = express.Router();

restaurantRouter.route('/register').post(
    (req,res)=>new RestaurantController().register(req, res)
)

restaurantRouter.route('/login').post(
    (req,res)=>new RestaurantController().login(req, res)
)

restaurantRouter.route('/getAllRestaurants').get(
    (req,res)=>new RestaurantController().getAllRestaurants(req, res)
)

restaurantRouter.route('/getRestaurant').post(
    (req,res)=>new RestaurantController().getRestaurant(req, res)
)

restaurantRouter.route('/search').post(
    (req,res)=>new RestaurantController().search(req, res)
)

restaurantRouter.route('/getRestaurantReviews').post(
    (req,res)=>new RestaurantController().getRestaurantReviews(req, res)
)

restaurantRouter.route('/createReview').post(
    (req,res)=>new RestaurantController().createReview(req, res)
)


export default restaurantRouter;