
const mongoose = require("mongoose");


const MessageScheme = new  mongoose.Schema({

    name:{
        type:String,
        
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },

    message:{
        type:String,
    }
})

const messagequery = mongoose.model("CustomerQuery",MessageScheme);

module.exports = messagequery;