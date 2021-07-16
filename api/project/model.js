// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects(){
    const projects = await db('projects')
    const results = projects.map(project =>
         project = {...project, project_completed: Boolean(project.project_completed)}
    )
    return results
}

async  function addProject(project){
    const addedProject = await db('projects').insert(project)
    const result = await db('projects').where('project_id', addedProject.project_id).first()
    return result}

module.exports = { getProjects, addProject }