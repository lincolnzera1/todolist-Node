const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
}

const createTask = async (title) => {
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
    const atualDate = new Date(Date.now()).toUTCString();
    const createdTask = await connection.execute(query, [title, "Pending", atualDate ]);
    return createdTask;
}

const deleteTask = async(id) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    const deletedTask = await connection.execute(query, [id])
    return deletedTask;
}

const updateTask = async(id, title) => {
    
    const atualDate = new Date(Date.now()).toUTCString();
    const query = 'UPDATE tasks SET title = ?, created_at = ? WHERE id = ?';

    const updatedTask = await connection.execute(query, [title, atualDate, id])
    return updatedTask;
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}