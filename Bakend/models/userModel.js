const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minLength:3,
    maxLength:20,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    minLength:6,
  },
  age:{
    type:Number,
  }

})

let User = mongoose.model("users",userSchema);

module.exports =User;