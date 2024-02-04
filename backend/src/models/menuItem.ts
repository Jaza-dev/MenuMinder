import mongoose from "mongoose";

const Schema = mongoose.Schema;

let MenuItem = new Schema({

    menuId:{
        type:String
    },
    name:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    currency:{
        type:String
    },
    quantity:{
        type:Number
    },
    UnitOfMeasure:{
        type:String
    }

})

export default mongoose.model('MenuItemModel', MenuItem, 'menuItem')