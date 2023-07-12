const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5002

app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open',()=>{
    console.log('MongoDB connection established successfully')
})

const resultsRouter = require('./routes/results')
const usersRouter = require('./routes/users')
app.use('/users',usersRouter)
app.use('/results',resultsRouter)

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})