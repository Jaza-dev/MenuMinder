"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let MenuItem = new Schema({
    menuId: {
        type: String
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    },
    quantity: {
        type: Number
    },
    UnitOfMeasure: {
        type: String
    }
});
exports.default = mongoose_1.default.model('MenuItemModel', MenuItem, 'menuItem');
