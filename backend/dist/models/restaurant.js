"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Restaurant = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    images: {
        type: Array
    },
    rating: {
        type: Number
    },
    numberOfReviews: {
        type: Number
    },
    dateOfRegistration: {
        type: Date
    }
});
exports.default = mongoose_1.default.model('RestaurantModel', Restaurant, 'restaurant');
