// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects(){
    const projects = await db('projects')
    return projects
}

module.exports = { getProjects }