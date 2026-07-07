import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./Database/Collection.js"
import chocorouter from './Routes/ChocoRoutes.js'
import router from './Routes/userRoutes.js'

const app = express()
connectDB()
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE"
    )
    res.setHeader("Access-Control-Allow-Headers",
        "Content-Type,Authorization"
    )
    next()
})
app.use('/chocolate',chocorouter)
app.use('/user',router)

const port = process.env.PORT || 3000
app.listen(port,()=>{console.log(`port running on ${port}`)})