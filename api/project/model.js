// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects(){
    const projects = await db('projects')
    return projects
}

 function addProject(project){
    return db('projects').insert(project)
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id).first()
    })
}

module.exports = { getProjects, addProject }