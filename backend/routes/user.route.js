import express from "express"
const router= express.Router()
import {signup,login,logout, allUsers} from "../controller/user.controller.js"
import SecureRoute from "../middleware/SecureRoute.js"
router.post("/signup",signup)
router.post("/login",login)
router.get("/logout",logout)
router.get("/allusers",SecureRoute,allUsers);


export default router