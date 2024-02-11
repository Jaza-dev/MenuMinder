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
exports.MenuController = void 0;
const menu_1 = __importDefault(require("../models/menu"));
class MenuController {
    constructor() {
        this.createMenu = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let menu = yield new menu_1.default({
                restaurantId: req.body.menu.restaurantId,
                name: req.body.menu.name,
                currency: req.body.menu.currency,
                pages: req.body.menu.pages,
                lastEdited: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
            }).save();
            res.json({ "message": menu });
        });
        this.getAllMenus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let allMenus = yield menu_1.default.find({});
            res.json({ "message": allMenus });
        });
        this.getMenu = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let _id = req.body._id;
            let menu = yield menu_1.default.findOne({ _id });
            res.json({ "message": menu });
        });
        this.getRestaurantMenus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let restaurantId = req.body.restaurantId;
            let menus = yield menu_1.default.find({ "restaurantId": restaurantId });
            res.json({ "message": menus });
        });
        this.addPage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.body;
            const updatedMenu = yield menu_1.default.findOneAndUpdate({ _id }, { $push: { 'pages': [] } }, { new: true });
            res.json({ "message": updatedMenu });
        });
        this.saveMenu = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let menu = req.body.menu;
            yield menu_1.default.updateOne({ "_id": menu._id }, menu);
            res.json({ "message": "Menu saved." });
        });
        this.deleteMenu = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let _id = req.body._id;
            yield menu_1.default.deleteOne({ "_id": _id });
            res.json({ "message": "Menu deleted." });
        });
    }
}
exports.MenuController = MenuController;
