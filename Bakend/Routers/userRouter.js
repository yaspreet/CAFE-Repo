const express = require("express");
const User = require("../models/userModel");
const { registerUser, getAllUsers, loginUser, varifyToken } = require("../controllers/userControllers");

const Router = express.Router();

// localhost:8000/user

Router.get('/',getAllUsers )

Router.post('/register',registerUser )


Router.post("/login",loginUser)
Router.get("/varifytoken",varifyToken)



module.exports= Router;