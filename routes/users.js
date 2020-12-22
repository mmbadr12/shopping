const express = require('express');
const router = express.Router();
const {validationResult,body} = require('express-validator'); 
const expressValid = require('../middleware/signupMiddleware');
const  UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const   __   = require('lodash');
const flash = require('connect-flash');


/* GET users listing. */
router.get('/signup', function(req, res, next) {
  
  res.render('user/signup' , { title: 'Shopping',

   errors: req.flash('errors'),

  });

});


/* POST users listing. */

router.post('/signup' ,expressValid, async(req,res,next)=>{

 const errors = validationResult(req);

 if (!errors.isEmpty()){
     console.log(errors)
   req.flash('errors', errors.array());
   res.redirect('/signup')

} else {

  let user = await UserSchema.findOne({
    
       email:req.body.email,
       password:req.body.password,
       token:req.body.token

  });

   user = new UserSchema(__.pick(req.body,['email','password']));
  
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  user.password = await bcrypt.hash(user.password, salt);
  
  user.save((error) => { 
    
    if (!error) {
        
      console.log('connect'); 
      
      res.redirect('/');
      req.flash('info', 'register seccussfuly');

    } else console.log(error.message) 
    
  });

}
 


})


module.exports = router;










/*
router.post('/signup' ,expressValid, async(req,res)=>{

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      console.log(errors.message);
      req.flash('errors', errors.array());
      res.redirect('/signup');

  } else { 

    let user = await new UserSchema.findOne({
   
      email:req.body.email,
       password:req.body.password,
       token:req.body.token

   });
  
   user = await new UserSchema(__.pick(req.body,['email','password']));

   const saltRound = 10;
   const salt = await bcrypt.genSalt(saltRound);
   user.password = await bcrypt.hash(user.password, salt);

   user.save( (err)=> {

    if(!err) {

        console.log('event was added');
        req.flash('info', 'successfuly add');
        res.redirect('/');

    } else { console.log(err.message); } 
})
   
}

});

*/