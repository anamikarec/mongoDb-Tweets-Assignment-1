const {body} = require('express-validator');

const validateTweet = ()=>([
    body("title")
    .not()
    .isEmpty()
    .withMessage("title should not be empty!")
    .isLength({min: 4})
    .withMessage("title should at least have 3 characters!")
    .isString()
    .withMessage("title should be a string!")
    ,
 body("description")
   .not().isEmpty().withMessage("Description should not be empty!")
   .isString().withMessage("Description should be a string")
   ,
   body("tags")
   .not().isEmpty().withMessage("Tags should not be empty!")
   .isArray().withMessage("Tags should be of array type")
  
 ]
)

module.exports = validateTweet;