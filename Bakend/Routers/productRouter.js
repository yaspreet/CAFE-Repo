const express = require("express");
const { getAllProducts, createProduct, deleteProduct, updateProduct } = require("../controllers/productController");

const Router = express.Router();

Router.get("/",getAllProducts)


Router.post("/create",createProduct)
Router.delete("/delete",deleteProduct)
Router.put("/update",updateProduct)




module.exports= Router;