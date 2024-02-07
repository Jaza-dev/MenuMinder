import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Menu = new Schema({
    name: {
        type: String
    },
    pages: {
        type: Array
    },
    currency: {
        type: String
    },
    lastEdited: {
        type: Date
    }
});

export default mongoose.model('MenuModel', Menu, 'menu');