import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Review = new Schema({

    restaurantUsername:{
        type:String
    },
    userEmail:{
        type:String
    },
    rating:{
        type:Number
    },
    comment:{
        type:String
    },
    date:{
        type:Date
    }

})

export default mongoose.model('ReviewModel', Review, 'review')