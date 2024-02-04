import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Menu = new Schema({

    name:{
        type:String
    },
    items:{
        type:Array
    },
    lastEdited:{
        type:Date
    }

})

export default mongoose.model('MenuModel', Menu, 'menu')