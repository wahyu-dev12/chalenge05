const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('cars')
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.get('/edit', (req, res) => {
    res.render('edit')
})

module.exports = router