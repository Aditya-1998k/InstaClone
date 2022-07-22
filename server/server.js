const express=require("express");
const mongoose= require("mongoose");
const cors=require("cors");
const postController=require("../server/user/routes/post");
const multer=require("multer")();
require('dotenv').config();

const app=express();
//creating our server at 3001 with error printing if it have after listen passing call back to see 
//what happen it created or not
//for running on production we use nodemon to see app crash condition not use live server for nodemon read readme file
const port=process.env.PORT||3002;
app.listen(port, (err)=>{
    if(!err){
        console.log("server started at 3001")
    }else{
        console.log(err)
    }
});


//connecting to your database and creating your database name here our database name is Ecommerce
//it have two callback fxn which are data and err funciton 
//on succesfully connected it show successfully connected to database in terminal other wise show err
//we define collection inside modals
mongoose.connect("mongodb+srv://aditya:Mom@1998@instaclone-1.qbb9d.mongodb.net/?retryWrites=true&w=majority/instaclone", (data)=>{
    console.log("Successfully connected to database")
}, (err)=>{
    console.log(err)
})

//data we get from front is either json data or form data bydefault express dont directly support these things
// so we need use data middle ware to read form data and json data 
//data middleware or bodyparser middleware
app.use(express.json()); //cover json data
app.use(express.urlencoded({extended: false})); //cover form data and encoded form data both
app.use(multer.array()); //to readform data or multipart data we need multer
app.use(cors()); //it enables cors everytime it requriested

app.use("/post", postController)