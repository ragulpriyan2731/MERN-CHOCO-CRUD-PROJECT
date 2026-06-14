import mongoose from "mongoose";

const connectDB =async()=>{
 
try{
    console.log(process.env.MONGODB)
    await mongoose.connect(process.env.MONGODB)
    console.log('mogodb connected sucessfully')

}
catch(error){
    console.error("database failed")
    console.log(error)
}
}
export default connectDB




