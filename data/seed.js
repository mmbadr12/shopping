/**
 * 
 * - create data Manual with models file and mongo connect
 * 
 */


const MONGODB = require('../config/databaseMongodb');
const Product = require('../models/shoppingSchema');

const ProductSchema = [


    new Product({
  
      imgPath : '/images/Apr20_07_1162572100.jpg',
      productName: 'The product experience',
      information:{
  
          Paperback: 'First',
          kindleEdition: 'Soon'
  
      },
      MarketSize:'Medium',
      price:'400'
  
    }),
  
    new Product({
  
      imgPath : '/images/24-imac-kuo-hero.jpg',
      productName: 'New product',
      information:{
  
          Paperback: 'Second',
          kindleEdition: 'Exclusive'
  
      },
      MarketSize:'Large',
      price:'38'
  
    }),
  
    new Product({
  
      imgPath : '/images/MR-Future-Products-2020-2.png',
      productName: 'New modle',
      information:{
  
          Paperback: 'Third',
          kindleEdition: 'Available'
  
      },
      MarketSize:'Medium',
      price:'6000'
  
    }),
  
    new Product({
  
      imgPath : '/images/price-tags_750.jpg',
      productName: 'New modle',
      information:{
  
          Paperback: 'Fourth',
          kindleEdition: 'Available'
  
      },
      MarketSize:'Medium',
      price:'4009'
  
    }),
  ]
  

 var done = 0;
  ProductSchema.forEach((ev)=>{

    ev.save((error,doc)=>{
   
       if(error) console.log(error.message) 

       console.log(doc)
   
       if (done === ev.lenght) MONGODB.discnnect() 

       else console.log('connect')      
       
    })
   
   })

  /*
  var done = 0;
    
  for(var i = 0; i < ProductSchema.length ; i++){
  
      ProductSchema.save((err,result)=>{
  
        if(err)console.log(err.message)
  
        console.log(result)
  
        done ++
        if(done === ProductSchema.length) mongoose.disconnect();
        
  
      })
  
  }*/