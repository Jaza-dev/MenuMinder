"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Review = new Schema({
    restaurantUsername: {
        type: String
    },
    userEmail: {
        type: String
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    },
    date: {
        type: Date
    }
});
exports.default = mongoose_1.default.model('ReviewModel', Review, 'review');
