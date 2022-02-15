const express = require('express');
const {body , validationResult} = require('express-validator');

const router= express.Router();

const Tweet= require('../models/tweet.model');
const validateTweet = require("../utils/validateTweet");

// ? pagination
// ? limit, skip

router.get("/", async (req,res)=>{
    try{
        const per_page = req.query.per_page || 2;
        const page = req.query.page || 1;
        const skip = page < 0 ? 0 : (page - 1)*per_page;
        // (page - 1)*per_page

        const tweet = await Tweet.find().skip(skip).limit(per_page);

        if(!tweet) return res.status(400).json({msg: "No tweet found!"}) 
        res.status(200).json(tweet);
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

router.get("/title/:title", async (req,res)=>{
    try{
        const tweet = await Tweet.findOne({title: req.params.title});
        if(!tweet) return res.status(400).json({msg: "title not found!"})        
        res.status(200).json(tweet);
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})


router.post("/", ...validateTweet() ,async (req,res)=>{
    try{
        // * Validate
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array()});
        }

        // * Create User
        const doesTweetExist= await Tweet.findOne({title: req.body.title})
        if(doesTweetExist) return res.status(400).json({msg: "Duplicate Title found!"})
        const tweet = await Tweet.create({
            title: req.body.title,
            description: req.body.description,
            tags : req.body.tags
        })

        if(!tweet) return res.status(400).json({msg: "Tweet not created!"})

        //200 ok
        return res.status(200).json(tweet)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

router.delete("/:user_id", async (req,res)=>{
    try{
        const tweet = await Tweet.findOneAndDelete({ _id: req.params.user_id })
        if(!tweet) return res.status(404).json({msg: "Tweet not found!"})
        res.status(200).json(tweet)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

router.patch("/:user_id", async (req,res)=>{
    try{
        if(!req.body.title) return res.status(400).json({msg: "title is required"});
        const tweet = await Tweet.findOneAndUpdate({ 
            _id: req.params.user_id 
        },{
            $set: {
                title: req.body.title,
                description: req.body.description,
                tags : req.body.tags
            }
        },{
            returnOriginal: false
        }
            )
        if(!tweet) return res.status(404).json({msg: "Tweet not found!"})
        res.status(200).json(tweet)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})


module.exports = router;