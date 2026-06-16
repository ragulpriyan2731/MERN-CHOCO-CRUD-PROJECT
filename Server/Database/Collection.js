import mongoose from "mongoose";
 import dns from "node:dns";
dns.setServers([
        "1.1.1.1",
        "8.8.8.8"
    ]);
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




