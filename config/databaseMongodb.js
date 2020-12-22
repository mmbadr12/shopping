/**
 * setup mongoDB with mongoose libraly
 * 
 */

require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB,{

  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true

})
.then(() => console.log('connect'))
.catch((error) => console.log(error.message))
