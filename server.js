// require express
const express = require('express')
const connect = require('./config/connectDB')
//create instance

const app = express()

// middleware body parser

app.use(express.json())

//require .env
require('dotenv').config()

//connection to DB
connect()

//create Port

const PORT = process.env.PORT

// listen to the PORT

app.listen(PORT,(err)=>{
    err?console.log(err)
    :console.log(`server is running on PORT ${PORT}`)
})

//require routes

app.use('/api/person', require('./routes/personRoute'))

app.use('/api/user', require('./routes/userRoute'))