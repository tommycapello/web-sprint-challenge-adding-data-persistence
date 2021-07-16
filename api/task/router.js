// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
})

router.post('/', async(req, res, next) => {
    try{
        const task = req.body
        const addedTask = await Task.addProject(task)
        res.json(addedTask)
    }
    catch(err){
        next(err)
    }
})



module.exports = router