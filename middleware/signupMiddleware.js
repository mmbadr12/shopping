const {check} = require('express-validator');


const expressValid = [

check('email').not().isEmpty().withMessage('email is required'),
check('email').isEmail().withMessage('plase valid email'),
check('password').not().isEmpty().withMessage('valid password'),
check('password').isLength({min : 8}).withMessage('plase inter password mor then 8 char'),
check('confirm-password').custom((value,{req}) => {
    if (value !== req.body.password) {
    throw new Error('Password confirmation is incorrect');
    }
    return true
})
      
]

module.exports = expressValid;