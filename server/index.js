const express = require('express')
const app = express()
const port= 8000 ;

const userRouter = require('../routes/usercontrol')

app.set('view engine', 'ejs')

app.use(express.static('public')); 
app.use('/', userRouter)
app.use('/add', userRouter)
app.use('/edit', userRouter)

app.listen(port, 'localhost',() => {
  console.log(`Server is up on http://localhost:${port}`);
})
