const { check, validationResult } = require("express-validator")


exports.registerValidation = () =>{
    check('name','this field is required').notEmpty(),
    check('email','this field is required').isEmail(),
    check('email','this field is required').notEmpty(),
    check('password','this field should be 4 carac minim').isLength({min:4})
}

exports.validator = (req, res, next) =>{
    const errors =validationResult(req);
    errors.isEmpty()? next():res.status(400).send(error.array())
}