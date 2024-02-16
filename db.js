// const mongoose = require("mongoose");
// const dotenv = require('dotenv')

// dotenv.config()

// const MONGODB_URL = process.env.MONGODB_URL

// const db = async () => {

//    try{
//     const con  = await mongoose.connect(MONGODB_URL)
//     console.log(`mongodb connnected: ${con.connection.host}`)
//   }catch(error){
//      console.error(error)
//   }

// }

// module.exports = db


const mongoose = require('mongoose');
require('dotenv').config();


const mongoURl = "mongodb://localhost:27017/students"
// const mongoURl = process.env.MONGODB_URI

const db = ()=>{
    mongoose.connect(mongoURl, ()=>{
        console.log("Conneted to mongo Successfully");
    })
}


module.exports = db;