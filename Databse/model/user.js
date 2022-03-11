const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
        Name:{
            type:String,
            required:true
        },
        Address:{
          type:String
        },
        phone_no:{
          type:Number,
          unique:true,
          min:10,
          max:10,
          required:true
        },
        Password:{
          type:String,
          required:true
        }
    });


module.exports = mongoose.model("Client",UserSchema);