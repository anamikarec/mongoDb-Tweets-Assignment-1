const express = require('express');
const app = express();
const mongoose = require('mongoose');
// creating user Schema
const userSchema = new mongoose.Schema({
    username: {type:String, required:true,unique:true},
    email: {type:String, required:true,unique:true},
    id : {type:Number, required:true}
})

const User = mongoose.model('User',userSchema);

module.exports = User;