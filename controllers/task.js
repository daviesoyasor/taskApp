const Task = require("../models/Task")
const ErrorResponse = require("../utils/errorResponse")

//note: to be able to use next(err), you will hav to add the next as a parameter to your route handler function

const getAllTasks = async (req, res, next) =>{
    try{
        const allTasks =  await Task.find({})
        res.status(200).json({allTasks})
    }catch(err){
        next(err)
    }
}

const createTask = async (req, res, next) =>{
    try{
        const tasks = await Task.create(req.body)
        res.status(200).json({tasks})
    }catch(err){
        next(err)
    }
}

const getSingleTask = async (req, res, next) =>{
    try{
        const id = req.params.id
        const task = await Task.findById(id)
        res.status(200).json({task})
    }catch(err){
       next(new ErrorResponse("Task with this id not found", 404))
    
    }
}

const updateSingleTask = async (req, res, next) => {
    try{
        const id = req.params.id
        const task = await Task.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(201).json({task})
    }catch(err){
        next(err)
    }
}

const deleteTask = async (req, res, next) =>{
    try{
        const id = req.params.id
        const task = await Task.findOneAndDelete(id)
        res.status(200).json({task})
    }catch(err){
        next(err)
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateSingleTask,
    deleteTask
};
