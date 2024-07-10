// This file contains all the endpoints related to tasks i.e. :
// 1. Individual and group task creation, modification and deletion

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    next()
})


router.get('/', (req, res) => {
    res.send('tasks home page')
})

router.get('/:name', (req, res) => {
    res.send(extract(req.params.name))
})

function extract(name){

    //1. extract data from db
    //2. do some operations
    //3. res.send

    const tasks = ['t1', 't2', 't3']
    if(name == "divya") return `${tasks}`
    else return 'user not found'
}

module.exports = router
