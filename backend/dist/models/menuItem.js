"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let MenuItem = new Schema({
    name: {
        type: String
    },
    details: {
        type: String
    },
    tags: {
        type: Array
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    unitOfMeasure: {
        type: String
    }
});
exports.default = mongoose_1.default.model('MenuItemModel', MenuItem, 'menuItem');
