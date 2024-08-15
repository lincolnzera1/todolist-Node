const express = require('express')
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router();

router.get('/tasks', tasksController.getAll)
router.post('/tasks',tasksMiddleware.validateTaskBody, tasksController.setTask)
router.delete('/tasks/:id', tasksMiddleware.validateDeleteId, tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddleware.validateUpdate, tasksController.updateTask)

module.exports = router