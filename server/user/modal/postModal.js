const mongoose=require("mongoose");


//type-->whatever datatype you want
//required:true means without that got err
//minLength and maxLength
const postSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    like:Number,
    date:String
});

//once our schema is created now we need to create our modal
//use mongoose.modal to create modal so that you can export it to whereeverr you want to use
//mongoose.modal("first is collection name that is created inyour database", "second is your schema")
const postModal=mongoose.model("posts", postSchema);

//export it 
module.exports=postModal;