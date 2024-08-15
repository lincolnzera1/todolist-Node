const tasksModel = require('../models/tasksModel');

const getAll = async (request, response)  => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks)
}

const setTask = async (request, response) => {
    const title = request.body.title;
    const task = await tasksModel.createTask(title);
    return response.status(201).json({
        message: `Task "${title}" created!`
    });
    
}

const deleteTask = async(request, response) => {
    const titleId = request.params;
    const deletedTask = await tasksModel.deleteTask(titleId.id);
    return response.status(200).json({
        message: "Task deleted : " + titleId.id
    })    
}

const updateTask = async(request, response) => {
    const params = request.params;
    const body = request.body;
    const updatedTask = await tasksModel.updateTask(params.id, body.title);
    return response.status(200).json({
        message: `Task ${params.id} updated sucessfully!`
    })
}

module.exports = {
    getAll,
    setTask,
    deleteTask,
    updateTask
} 