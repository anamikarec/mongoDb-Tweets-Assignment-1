const express = require('express');
const {body , validationResult} = require('express-validator');

const router= express.Router();

const User= require('../models/user.model');
const validateUser = require("../utils/validateUser");

router.get("/", async (req,res)=>{
    try{
        const per_page = req.query.per_page || 2;
        const page = req.query.page || 1;
        const skip = page < 0 ? 0 : (page - 1)*per_page;

        const users = await User.find().skip(skip).limit(per_page);

        if(!users) return res.status(400).json({msg: "No users found!"}) 
        res.status(200).json(users);
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

router.get("/username/:username", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.params.username});
        if(!user) return res.status(400).json({msg: "UserName not found!"})        
        res.status(200).json(user);
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})


router.post("/", ...validateUser() ,async (req,res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array()});
        }

        // Creating User
        const doesUserExist= await User.findOne({username: req.body.username})
        if(doesUserExist) return res.status(400).json({msg: "Duplicate User found!"})
        const user = await User.create({
            username: req.body.username,
            email: req.body.email
        })

        if(!user) return res.status(400).json({msg: "User not created!"})
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

router.delete("/:user_id", async (req,res)=>{
    try{
        const user = await User.findOneAndDelete({ _id: req.params.user_id })
        if(!user) return res.status(404).json({msg: "UserName not found!"})
        res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

router.patch("/:user_id", async (req,res)=>{
    try{
        if(!req.body.username) return res.status(400).json({msg: "UserName is required"});
        const user = await User.findOneAndUpdate({ 
            _id: req.params.user_id 
        },{
            $set: {
                username: req.body.username,
                email: req.body.email
            }
        },{
            returnOriginal: false
        }
            )
        if(!user) return res.status(404).json({msg: "User not found!"})
        res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})


module.exports = router;