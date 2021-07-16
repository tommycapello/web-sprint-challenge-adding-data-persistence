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

router.post('/', (req, res, next) => {

})



module.exports = router