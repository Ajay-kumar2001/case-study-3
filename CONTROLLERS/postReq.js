let tasks=require("../MODEL/task")
let postreq=async(req,res)=>{
    try{
          //storing the data into the database
        const user= await new tasks({...req.body})
        await user.save()
        res.status(200).json({"massage":" data posted"})

    }catch(er){
        res.status(500).send(er)
    }
}
 module.exports=postreq   

