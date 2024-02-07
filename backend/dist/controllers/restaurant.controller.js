"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const restaurant_1 = __importDefault(require("../models/restaurant"));
const utility_1 = require("../helpers/utility");
class RestaurantController {
    constructor() {
        this.getAllRestaurants = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let restaurants = yield restaurant_1.default.find({});
            return res.json({ "message": restaurants });
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            let restaurant = yield restaurant_1.default.findOne({ username });
            if (restaurant) {
                return res.json({ message: "Restaurant with that username already exists." });
            }
            let password = req.body.password;
            const utility = new utility_1.Utility();
            const hashedPassword = yield utility.hashPassword(password);
            restaurant = yield new restaurant_1.default({
                username: req.body.username,
                password: hashedPassword,
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                phone: req.body.phone,
                email: req.body.email,
                images: req.body.images,
                rating: 0,
                numberOfReviews: 0,
                dateOfRegistration: new Date(new Date().setHours(new Date().getHours() + 1))
            }).save();
            return res.json({ message: "Restaurant created successfully." });
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            let password = req.body.password;
            let restaurant = yield restaurant_1.default.findOne({ username });
            if (restaurant && restaurant.password !== null && restaurant.password !== undefined) {
                const utility = new utility_1.Utility();
                const isMatch = yield utility.comparePasswords(password, restaurant.password);
                if (isMatch)
                    return res.json({ message: "Successful login.", restaurant: restaurant });
            }
            return res.json({ message: "Username or password are incorrect." });
        });
        this.getRestaurant = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let _id = req.body._id;
            let restaurant = yield restaurant_1.default.findOne({ _id });
            res.json({ message: restaurant });
        });
    }
}
exports.RestaurantController = RestaurantController;
