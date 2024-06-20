import mongoose  from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
    ,
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    }
},{timestamps:true}) //createAAt updatedAT

export default mongoose.model('User',userSchema); //exporting the model with name User and schema