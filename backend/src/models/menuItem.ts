import mongoose from "mongoose";

const Schema = mongoose.Schema;

let MenuItem = new Schema({

    name:{
        type:String
    },
    details:{
        type:String
    },
    tags:{
        type:Array
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    unitOfMeasure:{
        type:String
    }

})

export default mongoose.model('MenuItemModel', MenuItem, 'menuItem')