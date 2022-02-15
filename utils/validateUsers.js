const {body} = require('express-validator');

const validateUser = () =>{
    body("username")
    .not()
    .isEmpty()
    .withMessage("username should not be empty!!")
    .isLength({min : 7})
    .withMessage("username should have atleast 7 characters!!")
    .isString()
    .withMessage("username should be of string type!!")
    , 
    body("email")
    .not()
    .isEmpty()
    .withMessage("email should not be empty!!")
    .isEmail()
    .withMessage("should be of email type!!")
    ,
    body("id")
    .not()
    .isEmpty()
    .withMessage("id should not be empty!!")
}

module.exports = validateUser;