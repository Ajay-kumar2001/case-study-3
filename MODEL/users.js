let mongoose=require("mongoose")
const sehema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String ,require:true},
    conformpassword:{type:String ,require:true},
    phoneno:{type:String}
})
module.exports=mongoose.model("users",sehema)



