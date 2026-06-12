import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { Collection } from "mongoose"

const app = express()
Collection()
app.get('/',(req,res)=>{
    res.send('hello')
})
const port = process.env.PORT || 3000
app.listen(port,()=>{console.log(`port running on ${port}`)})