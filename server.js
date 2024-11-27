require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()

const PORT = 3000

app.get("/",(req,res)=>{
  res.render("index.ejs")
})
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected",()=>{
  console.log(`connected to MondoDB ${mongoose.Connection.name}`)
})
app.use(express.urlencoded({extended:false}))

app.use(methodOverride("._method"))

//require the controller
const carsCrl=require("./controllers/cars")

//use controller

app.use("/",carsCrl)

app.listen(PORT, () => {
  console.log(`welcome to ${PORT} port`)
})