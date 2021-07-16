// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources(){
    const resources = await db('resources')
    return resources
}

async function addResource(resource){
    const addedResource = await db('resources').insert(resource)
    const result = await db('resources').where('resource_id', addedResource.resource_id).first()
    return result}

module.exports = { getResources, addResource }