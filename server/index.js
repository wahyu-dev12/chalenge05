const express = require('express')
const app = express()
const path = require('path')
const port= 8000 ;

app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/cars.html'))
})

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/add.html'))
})

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/edit.html'))
})

app.listen(port, 'localhost',() => {
  console.log(`Server is up on http://localhost:${port}`);
})
