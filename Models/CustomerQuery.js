
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
    },
    solve:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const messagequery = mongoose.model("CustomerQuery",MessageScheme);

module.exports = messagequery;