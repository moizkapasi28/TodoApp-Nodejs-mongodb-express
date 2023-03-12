require('dotenv').config()
const Todo = require("../models/todos")
const mongoose = require('mongoose')

const connectDB = async function(){
    try{
        const con = await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection to Database")
    }catch(err){
        console.log(err)
        return false;
    }
};
module.exports = connectDB;