import express from 'express'
import { RestaurantController } from '../controllers/restaurant.controller';

const restaurantRouter = express.Router();

restaurantRouter.route('/register').post(
    (req,res)=>new RestaurantController().register(req, res)
)

export default restaurantRouter;