const express = require('express');
const router = express.Router();
const Product = require('../models/shoppingSchema');


/* GET home page. */
router.get('/' , (req,res)=>{

  Product.find({},(error,events)=>{

      let prodct = []
      let evesize = 3
      for(var i = 0 ; i < events.length ; i+=evesize){

        prodct.push(events.slice(i,evesize + i));
      }
      res.render('indexFile/index', { title: 'Shopping',
        prodct:prodct,
        
                
      });
  });

});





module.exports = router;

