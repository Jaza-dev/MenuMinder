"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("../controllers/menu.controller");
const menuRouter = express_1.default.Router();
menuRouter.route('/createMenu').post((req, res) => new menu_controller_1.MenuController().createMenu(req, res));
menuRouter.route('/getAllMenus').get((req, res) => new menu_controller_1.MenuController().getAllMenus(req, res));
menuRouter.route('/getMenu').post((req, res) => new menu_controller_1.MenuController().getMenu(req, res));
menuRouter.route('/addPage').post((req, res) => new menu_controller_1.MenuController().addPage(req, res));
menuRouter.route('/saveMenu').post((req, res) => new menu_controller_1.MenuController().saveMenu(req, res));
menuRouter.route('/deleteMenu').post((req, res) => new menu_controller_1.MenuController().deleteMenu(req, res));
menuRouter.route('/getRestaurantMenus').post((req, res) => new menu_controller_1.MenuController().getRestaurantMenus(req, res));
exports.default = menuRouter;
