let express=require("express")
const postReq = require("../CONTROLLERS/postReq")
const getReq =require("../CONTROLLERS/getReq")
const deletReq = require("../CONTROLLERS/deleteRq")
const putReq = require("../CONTROLLERS/putREq")
const register = require("../CONTROLLERS/register")
const login = require("../CONTROLLERS/login")
const authentication = require("../MIDDLEWARES/authentication")
// const Auth = require("../CONTROLLERS/Auth")
let rout=express.Router()
rout.post("/add",authentication, postReq)//add task
rout.get("/getdata",getReq)//geting all tasks
rout.delete("/delete/:id",deletReq)//delete task
rout.put("/update/:id", putReq)//update task
rout.post("/register", register)
rout.post("/login",login)
module.exports=rout