const {
    response
} = require("express");
const Todo = require("../models/todos")
var todo;
const item1 = new Todo({
    task: "Buy eggs",
    completed: false,
})
const item2 = new Todo({
    task: "Buy fruits",
    completed: false,
})
const data = [item1, item2];

// this is logic to get all todos
exports.findallTodo = async (req, res) => {
    try {
        const todos = await Todo.find()
        if (todos.length === 0) {
            Todo.insertMany(data)
            res.status(200).json(todos)
        } else {
            res.status(200).json(todos)
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

//this is logic to add todo
exports.addtodo = async (req, res) => {
    const todoItem = req.body.task
    todo = new Todo({
        task: todoItem,
        completed: false,
    })
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

//this is logic  to iscompleted todo
exports.taskCompleted = async (req, res) => {
    try {
        const id = req.body.id
        const result = await Todo.updateOne({
            _id: id
        }, {
            $set: {
                completed: true
            }
        });
        res.status(200).send(result)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}
//this is logic  to isRemaining todo
exports.uncheck = async (req, res) => {
    try {
        const id = req.body.id
        const result = await Todo.updateOne({
            _id: id
        }, {
            $set: {
                completed: false
            }
        });
        res.status(200).send(result)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}

exports.deleteTask = async(req,res)=>{
    try{
        const result = await Todo.findOneAndDelete({_id:req.body.id})
        res.status(200).json({message:"Item deleted"})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}


























































































































// exports.findallTodo = async (req,res)=>{
//     var todo = await Todo.find({})
//     if(todo.length===0){
//         Todo.insertMany(data)
//         // res.redirect("/")
//         res.status(200).json({response})
//         res.render("index",{todoData:todo})
//     }
// }

// //this is logic to add new todos
// exports.addtodo = async(req,res)=>{
//     // console.log("[][][]]]",req.body)
//         const {name} = req.body
//         var task = new Todo({
//          name,
//          completed : false,
//         })
//     try{
//         const response = await task.save()  
//         res.status(200).json({response})
//         res.render("index",{todoData:task})
//     }catch(err){
//         res.status(400).json({message:err.message})
//     }

// }

// //this is logic to mark todo completed
// exports.taskCompleted = async (req,res)=>{
//     try{
//         const checkedbox =  await req.body.checkbox;
//         const result = await Todo.findOneAndUpdate({ _id: checkedbox }, {
//             $set: {
//                 completed: true
//             }
//         });
//         res.redirect("/") 
//     }catch(err){
//         console.log(err)
//     }

// }
