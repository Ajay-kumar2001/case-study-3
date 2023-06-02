let tasks=require("../MODEL/task")
let deletReq=async(req,res)=>{
    try{
        // deleting the paticular document with the help of id
        await tasks.findByIdAndDelete(req.params.id)
        res.status(200).send("document deleted")

    }catch(er){
        res.status(500).send(Error)
    }
}
module.exports=deletReq