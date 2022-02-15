const {body} = require('express-validator');

const validateTweets = () =>{
    body("title")
    .not()
    .isEmpty()
    .withMessage("Title should not be empty!!")
    ,
    body("body")
    .not()
    .isEmpty()
    .withMessage("Body should not be empty!!")
    ,
    body("user_id")
    .not()
    .isEmpty()
    .withMessage("user_id should not be empty!!")
    .isNumber()
    .withMessage("id should be of number type!!")
}

module.exports = validateTweets;