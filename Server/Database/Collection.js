import mongoose from "mongoose";

const connectDB = mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log('mogodb connected sucessfully')

})
.catch((error)=>{
    console.log(error)
})