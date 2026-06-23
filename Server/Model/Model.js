import mongoose from "mongoose";
 const choco = new mongoose.Schema({
    choconame:{type:String,required:true},
    price:{type:String,required:true},
    quantity:{type:String,required:true},
    description:{type:String,required:true}
 
 }

 )
 const chocolate = mongoose.model('Choco',choco)
 export default chocolate