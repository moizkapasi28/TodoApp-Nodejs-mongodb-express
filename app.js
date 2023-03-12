const express = require('express')
const app = express();
const path = require('path')
const routes = require('./server/routes/routes')
const connectDB = require("./server/database/database")


app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

connectDB();

app.use(express.json())

app.get('/',(req,res)=>{
    res.redirect('/task/home')
})

app.use('/task',routes)

app.listen(3000 ,()=>{
    console.log("Server Started")
})  