const express = require('express')
const db = require('../models/conn')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get('/', async (req, res) => {
    let coll = db.collection("users")
    let urs = await coll.find({}).toArray()
    res.send(urs).status(200)
})


module.exports = router
