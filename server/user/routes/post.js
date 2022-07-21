const express=require("express");
const postModal=require("../modal/postModal")

const router=express.Router();

router.post("/add", (req, res)=>{
    postModal.create({image:req.body.image, author: req.body.author, location:req.body.location, description: req.body.description, like:0, date: new Date()}).then(()=>{
        res.status(200).send("Post created successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

router.get("/add", (req, res)=>{
    postModal.find().then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
 module.exports=router;