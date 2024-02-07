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


export default restaurantRouter;