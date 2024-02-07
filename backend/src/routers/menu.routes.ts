import express from 'express'
import { MenuController } from '../controllers/menu.controller';

const menuRouter = express.Router();

menuRouter.route('/createMenu').post(
    (req,res)=>new MenuController().createMenu(req, res)
)

menuRouter.route('/getAllMenus').get(
    (req,res)=>new MenuController().getAllMenus(req, res)
)

menuRouter.route('/getMenu').post(
    (req,res)=>new MenuController().getMenu(req, res)
)

menuRouter.route('/addPage').post(
    (req,res)=>new MenuController().addPage(req, res)
)

menuRouter.route('/saveMenu').post(
    (req,res)=>new MenuController().saveMenu(req, res)
)

menuRouter.route('/deleteMenu').post(
    (req,res)=>new MenuController().deleteMenu(req, res)
)

export default menuRouter;