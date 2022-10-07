const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const cookieParser=require('cookie-parser');

const handler = require('./handler')
const multerValidation = require('./validation')

const app = express()

const PORT = process.env.PORT || 8081

// mengarahkan directory views didalam directory public
// app.set('views', path.join(__dirname, '../public/views'))

app.set('view engine', 'ejs')

app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', handler.showIndexLayout)

app.get('/create', handler.showCreateLayout)

app.post('/create', multerValidation, handler.processCreating)

app.get('/update/:id', handler.showUpdateLayout)

app.put('/update', multerValidation, handler.processUpdating)

app.delete('/delete', handler.processDeleting)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})