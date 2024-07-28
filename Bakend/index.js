
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const productRouter = require("./routers/productRouter");
const userRouter = require("./Routers/userRouter")
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.use('/user',userRouter);
server.use("/products",productRouter);




mongoose.connect("mongodb://127.0.0.1:27017/Bakend")
.then(()=>console.log("connected to database successfully"))
.catch((err)=>console.log(err))




server.listen(9000,()=>{
    console.log("server is listening on port 9000")
});





// 1. show dbs => to show all dbs
// 2. use <db_name> => to switch an existing db or to create a new db
//3. db.dropDatabase() => to delete existing db
// 4. db.createCollection(<collection_name>) => to create new collection in existing db
//5. show collections => to show all collections 
//6. db.<colection_name>.insertOne({}) => to insert single document in given collection
//7. db.<collection_name>.insertMany([{},{},{}...]) => to insert multiple documents in given collection
//8. db.<collection_name>.updateOne({},{$set:{}}) => to update single documents in given collection
//9. db.<collection_name>.updateMany({},{$set:{}}) => to update multiple documents in given collection
//10.db.<collection_name>.deleteOne({}) => to delete single document from given collection
//11.db.<collection_name>.deleteMany({}) => to delete multiple document from given collection
//12.db.<collection_name>.findOne({}) => to find single data from give collection
//13.db.<collection_name>.find({}) => to find all data from give collection


        
// 12345 => dskjg;dskaj;kdgdsajkhdkj;alkfdgjkha;kdjdghdajk;j

// 12345 => dskjg;dskaj;kdgdsajkhdkj;alkfdgjkha;kdjdghdajk;j






















/*


// Node.js is a runtime environment for executing Javascript code server-side.

// Runtime Environment: Node.js uses the V8 JavaScript engine (the core of Google Chrome) plus the libuv library
for asynchronous i/0 operations, making it efficient for building scalable network applications.

// Non-blocking I/O: Node.js operates on a single-threaded event loop, using non-blocking I/O calls, allowing it to handle thousands / of
          concurrent connections without incurring the cost of thread context switching.

// First-class JavaScript Support: Node.js allows you to write server-side code using JavaScript,
     providing a unified language for  both server and client-side scripts.

// npm: Node.js comes with npm (Node Package Manager), the largest ecosystem of open source libraries that you can use in your project, making it easy to add functionality.

// Module System: Node.js supports module-based architecture, which encourages separation of concerns through reusable code modules.
        It supports both CommonJS modules and ES6 modules, allowing for better code organization.

// Built-in Modules: Node.js provides a rich set of built-in modules (e.g., fs for file system operations, http for networking) that require no external dependencies, 
    facilitating rapid development of applications.

// Asynchronous and Event-Driven: All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.
    js-based server never waits for an API to return data, using events to trigger callbacks when data is ready.

// Global Objects: Unlike browser JavaScript, Node.js has different global objects available (e.g.. global, process) for various
       global functionalities and configuration.

*/



// DOM  alert prompt confirm document console fetch window

// alert("hello")

// console.log(process.env.HOMEPATH);

//1.custome module
//2. inbuilt module
//3.third_party module


//   const {multiply} = require("./math")


// const os = require("os");

// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.version());
// console.log(os.cpus().length);
// console.log(os.totalmem());
// console.log(os.freemem());


// const fs = require("fs");

//  let data = fs.readFileSync("./math.js","utf-8");
//  console.log(data);

//    fs.writeFileSync("./sample.txt","this is sample file",{flag:"a"});

//    fs.appendFileSync("./sample.txt"," hello world")

//     if(fs.existsSync("./sample.txt"))
//   fs.unlinkSync("./sample.txt");
//    else{
//     console.log("file not exist")
//    }



// const fs = require("fs");

// let home = fs.readFileSync("./home.html","utf-8");
// let about = fs.readFileSync("./about.html","utf-8");
// let contact = fs.readFileSync("./contact.html","utf-8");
// let css = fs.readFileSync("./home.css","utf-8");



//  const http = require("http");

//  const server = http.createServer();

//  server.on("request",(req,res)=>{
//     if(req.url==='/'){
//         res.end(home);
//     }
//     else if(req.url==='/about'){
//         res.end(about)
//     }
//     else if(req.url==="/contact"){
//         res.end(contact)
//     }
//     else if(req.url==='/home.css'){
//         res.end(css)
//     }
//  })



//  server.listen(5000,()=>{
//     console.log("server is listening on port 5000")
//  })

