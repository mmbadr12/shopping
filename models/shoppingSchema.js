/**
 * 
 * - create schema with mongoose
 * 
 */

const mongoose = require('mongoose');

const prodectSchema = new mongoose.Schema({

    imgPath:{ 
        
        type:String,
        required:true
    },
    productName:{
        
        type:String, 
        required:true
    },
    information:{
   
        required:true,

        type:{

            Paperback:String,
            kindleEdition:String
        }
      
    },
    MarketSize:{
        
        type:String, 
        required:true
    },
    price:{
        
        type:Number, 
        required:true
    }

})

const Product = mongoose.model('Product', prodectSchema, 'ones');

module.exports = Product;