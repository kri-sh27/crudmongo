require('dotenv').config()
const express = require('express')
const connectToDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const cors= require('cors')

const app = express()
connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use('/', userRoutes)
module.exports = app