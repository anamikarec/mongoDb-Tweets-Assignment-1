const app=require("express")();
const mongoose  = require("mongoose");

//Schema
const TweetSchema= new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    tags: {type: Array, required: true}
    })

//Models
// *or
const Tweet = mongoose.model("Tweet",TweetSchema);

module.exports=Tweet;