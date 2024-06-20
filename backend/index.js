import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoute from "./routes/user.route.js"
const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
dotenv.config()

const PORT=process.env.PORT || 3001
mongoose.connect("mongodb://127.0.0.1:27017/ChatApp").then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})

app.use("/api/user",userRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to my first express app")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})