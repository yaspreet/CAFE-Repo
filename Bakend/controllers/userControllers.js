const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function getAllUsers(req,res){
    let data = await User.find();
    res.send(data);

}


async function registerUser(req,res){
  let data = req.body;
  let existingUser = await User.findOne({email:data.email});
  if(existingUser){
   return  res.status(400).json({
    success:false,
    errmsg:"you are already registered"
   })
  }


  let hashPassword = await bcrypt.hash(data.password,10);


  let userData = {
    name : data.name,
    email : data.email,
    password :hashPassword,
    age: data.age
  }


  let newUser = await User.create(userData);
  res.send(newUser);

}


async function loginUser(req,res){
    let data = req.body;

  let existingUser =await User.findOne({email:data.email});
  
  if(!existingUser){
   return res.send("no user found register first")
  }

 let isvalid = await bcrypt.compare(data.password,existingUser.password)

 if(!isvalid){
    return res.send("wrong password")
 }


let token = jwt.sign({userId:existingUser._id},"thisisyoursecretkey");


  res.send({existingUser,token});
}




async function varifyToken(req,res){

 try {
   
  let header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({
        success:false,
        errmsg:"no header provided"
      });
    }

    let token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success:false,
        errmsg:"no token provided"
      });
    }

   let {userId} =  jwt.verify(token, "thisisyoursecretkey");

     let user = await User.findById(userId)
   res.status(200).json({
    success:true,
    data:user
   })
  
 } catch (error) {
   res.status(500).json({
    success:false,
    errmsg:error.message,
   })
 }


}


module.exports ={getAllUsers,registerUser,loginUser,varifyToken}