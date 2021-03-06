const express = require('express')

const dotenv = require('dotenv').config()
const port =  process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
connectDB()


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/goals',require('./routes/goalRouter'))

app.use(errorHandler)

app.listen(port, (res,req) => {
    console.log("Server is ready")
})