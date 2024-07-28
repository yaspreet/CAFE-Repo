
const jwt = require("jsonwebtoken");
const Products = require("../models/productmodel");


async function getAllProducts(req, res) {
  let data = await Products.find();
  res.status(200).json({
     success:true,
     data:data,
  });

}



async function createProduct(req, res) {
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

    jwt.verify(token, "thisisyoursecretkey");

    let data = req.body;

    let newProduct = await Products.create(data);

    res.status(200).json({
      success:true,
      data:newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success:false,
      error
    });
  }
}

async function deleteProduct(req,res){
 try {
  let header = req.headers.authorization;

    if (!header) {
      return res.send("no header provided");
    }

    let token = header.split(" ")[1];
    if (!token) {
      return res.send("no token provided");
    }

    jwt.verify(token, "thisisyoursecretkey");


    let id = req.headers.id;

    let val = await Products.findByIdAndDelete(id);
    if(val)
   res.send("product deleted successfully")
  else{
    res.send("no product found");
  }
  
 } catch (error) {
    res.send(error);
 }


}

async function updateProduct(req,res){
  try {

    let header = req.headers.authorization;

    if (!header) {
      return res.send("no header provided");
    }

    let token = header.split(" ")[1];
    if (!token) {
      return res.send("no token provided");
    }

    jwt.verify(token, "thisisyoursecretkey");


    let id = req.headers.id;
    let data = req.body;

      let updatedProduct= await Products.findByIdAndUpdate(id,data,{new:true});
       res.send(updatedProduct);
    
  } catch (error) {
    
  }
}









module.exports = { getAllProducts, createProduct,deleteProduct,updateProduct };