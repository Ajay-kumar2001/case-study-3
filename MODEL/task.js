let mongoose=require("mongoose")
let taskSchema=new mongoose.Schema({
    title:String,
    description:String,
    assignee:String,
    creationdate:String,
    duedate:String,
    priority:String,
})
module.exports=mongoose.model("task",taskSchema)