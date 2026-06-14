import express from "express"
import dotenv from "dotenv"
dotenv.config()
// console.log(result.parsed)
import connectDB from "./Database/Collection.js"
import router from './Routes/ChocoRoutes.js'

const app = express()
connectDB()
app.use(express.json())
app.use('/api',router)

const port = process.env.PORT || 3000
app.listen(port,()=>{console.log(`port running on ${port}`)})