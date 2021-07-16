// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
const { checkBody } = require('./middleware')

router.get('/', async(req, res, next) => {
    try{
        const rows = await Project.getProjects()
        res.json(rows)
    }
    catch(err){
        next(err)
    }
})

router.post('/', checkBody, async(req, res, next) => {
    try{
        const project = req.body
        const addedProject = await Project.addProject(project)
        res.json(addedProject)
    }
    catch(err){
        next(err)
    }

})


module.exports = router