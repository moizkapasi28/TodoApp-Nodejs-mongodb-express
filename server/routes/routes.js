const express = require('express')
const {findallTodo, addtodo,taskCompleted,uncheck,deleteTask} = require("../controller/controller")
const router = express.Router()

router.get('/home',(req,res)=>{
    res.render('index')
})

router.get("/gettask",findallTodo)

router.post("/add",addtodo)

router.put("/update",taskCompleted)

router.put("/uncheck",uncheck)

router.delete("/delete",deleteTask)

module.exports = router