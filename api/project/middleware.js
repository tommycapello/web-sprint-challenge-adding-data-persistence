
const checkBody = (req, res, next) => {
    const {project_name} = req.body
    if(!project_name){
        next({status: 400, message: 'project name missing'})
    }
    else{
        next()
    }
}


module.exports = { checkBody }