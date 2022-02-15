const express = require('express');
const app = express();
const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    title : {required:true},
    body : {required:true},
    user_id : {type:Number, required:true}
})

const TweetsSchema = mongoose.model("Tweet",tweetsSchema);

module.exports = TweetsSchema;