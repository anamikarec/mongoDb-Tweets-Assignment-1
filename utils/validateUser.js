const {body} = require('express-validator');

const validateUser = ()=>([
    body("username")
    .not()
    .isEmpty()
    .withMessage("username should not be empty!")
    .isLength({min: 4})
    .withMessage("username should at least have 3 characters!")
    .isString()
    .withMessage("username should be a string!")
    ,
 body("email")
   .not().isEmpty().withMessage("email should not be empty!")
   .isString().withMessage("email should be a string")
 ]
)

module.exports = validateUser;