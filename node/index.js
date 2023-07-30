const express = require('express')
const bodyParser = require('body-parser')
const dbConnect = require('./config/dbConnect')
const cookieParser = require('cookie-parser')

const app = express()


const dotenv = require("dotenv").config()
const PORT = process.env.PORT

const authRoute = require("./routes/authRouter")
const productRouter = require("./routes/productRoute")
const { notFound, errorHandler } = require('./middlewares/errorHandler')



app.use(express.json())
app.use(cookieParser())

// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({ extended: false}))

app.use("/api/user" , authRoute)
app.use("/api/product", productRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(7000 , () => {
    dbConnect()
    console.log("Connected to server")
})