import mongoose from "mongoose";

const user = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{timestamps:true})
const users = mongoose.model('User',user)
export default users