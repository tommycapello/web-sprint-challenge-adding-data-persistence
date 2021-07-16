// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks(){
    const tasks = await db('tasks')
    const results = await tasks.map(task =>
        task = {...task, task_completed: Boolean(task.task_completed)}
   )
   return results
}

async  function addTask(task){
    const addedTask = await db('tasks').insert(task)
    const result = await db('tasks').where('task_id', addedTask.project_id).first()
    return result}

module.exports = { getTasks, addTask }