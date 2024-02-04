"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_controller_1 = require("../controllers/restaurant.controller");
const restaurantRouter = express_1.default.Router();
restaurantRouter.route('/register').post((req, res) => new restaurant_controller_1.RestaurantController().register(req, res));
restaurantRouter.route('/login').post((req, res) => new restaurant_controller_1.RestaurantController().login(req, res));
restaurantRouter.route('/getAllRestaurants').get((req, res) => new restaurant_controller_1.RestaurantController().getAllRestaurants(req, res));
exports.default = restaurantRouter;
