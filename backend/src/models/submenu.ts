import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Submenu = new Schema({

    name:{
        type:String
    },
    items:{
        type:Array
    }

})

export default mongoose.model('SubmenuModel', Submenu, 'submenu')