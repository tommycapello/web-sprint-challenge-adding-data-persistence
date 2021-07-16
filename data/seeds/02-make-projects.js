const projects = [
    {project_name: "Clean House", project_description: "Clean every room", project_completed: true},
    {project_name: "Go to DMV", project_description: "Need to renew license", project_completed: false},
    {project_name: "Grocery Shopping", project_description: "Need food for the week", project_completed: true},
]

const resources = [
    {resource_name: "Cleaning supplies", resource_description: "Everything I need to clean the house"},
    {resource_name: "DMV documents", resource_description: "need proof of address and driver record"},
    {resource_name: "Grocery Store", resource_description: "my local grocery store"},
]

const tasks = [
    {task_description: "clean bathroom", task_notes: "needs extra bleach", task_completed: true, project_id: 1},
    {task_description: "make a reservation", task_notes: "i can do it online or go in person", task_completed: false, project_id: 2},
    {task_description: "get fruits for the week", task_notes: "i like apples and oranges", task_completed: false, project_id: 3},
]

const project_resources = [
    {project_id: 1, resource_id: 1},
    {project_id: 2, resource_id: 2},
    {project_id: 3, resource_id: 3},
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}