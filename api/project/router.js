// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async(req, res, next) => {
    try{
        const rows = await Project.getProjects()
        res.json(rows)
    }
    catch(err){
        next(err)
    }
})

router.post('/', (req, res, next) => {
})


module.exports = router