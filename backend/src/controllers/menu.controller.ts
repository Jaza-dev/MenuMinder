import express from 'express'
import MenuModel from '../models/menu'

export class MenuController{

    createMenu = async (req:express.Request, res:express.Response)=>{

        let menu = await new MenuModel({
            name:req.body.menu.name,
            currency:req.body.menu.currency,
            pages:req.body.menu.pages,
            lastEdited:new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
        }).save();

        res.json({"message":menu})
    }

    getAllMenus = async (req:express.Request, res:express.Response)=>{

        let allMenus = await MenuModel.find({});

        res.json({"message":allMenus});

    }

    getMenu = async (req:express.Request, res:express.Response)=>{

        let _id = req.body._id;
        
        let menu = await MenuModel.findOne({_id});

        res.json({"message":menu});

    }

    addPage = async (req:express.Request, res:express.Response)=>{
        
        const { _id } = req.body;

        const updatedMenu = await MenuModel.findOneAndUpdate( { _id }, { $push: { 'pages': [] } }, { new: true } );
        
        res.json({"message":updatedMenu});
    }

    saveMenu = async (req:express.Request, res:express.Response)=>{

        let menu = req.body.menu;

        await MenuModel.updateOne({"_id":menu._id}, menu);

        res.json({"message":"Menu saved."})

    }

    deleteMenu  = async (req:express.Request, res:express.Response)=>{

        let _id = req.body._id;

        await MenuModel.deleteOne({"_id":_id});

        res.json({"message":"Menu deleted."})

    }

}