import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Restaurant = new Schema({

    username:{
        type:String
    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    images:{
        type:Array
    },
    rating:{
        type:Number
    },
    numberOfReviews:{
        type:Number
    },
    dateOfRegistration:{
        type:Date
    }
})

export default mongoose.model('RestaurantModel', Restaurant, 'restaurant')