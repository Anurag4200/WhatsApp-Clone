
import jwt from "jsonwebtoken"
import userModel from "../models/user.js"
const SecureRoute = async(req,res,next) => {
  try {
    const token= req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    const decoded = jwt.verify(token,'shhhhh');
    if(!decoded){
        return res.status(401).json({message:"Unauthorized"})
    }
    const user= await userModel.findById(decoded.userId).select("-password")
    if(!user){
        return res.status(401).json({message:"Unauthorized"})
    }
    req.user=user;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({message:"Unauthorized"})  
  }
}

export default SecureRoute