const express=require("express");
const dbConnect=require("./mongodb");
const mongodb=require("mongodb");

const app=express();
//midlleware
app.use(express.json());
//get api method
app.get('/',async(req,res)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    res.send(data)
});
//post api method
app.post('/',async(req,res)=>{
    
    let data= await dbConnect();
    let result=data.insertOne(req.body)
    res.send(result)
});
//put api method
app.put('/:name',async(req,res)=>{
    let data=await dbConnect();
    let result=data.updateOne(
        {name:req.params.name},
        {$set:req.body}
        )
    res.send({result:"updated"})
})
//delete api method
app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    const data=await dbConnect();
    const result=await data.deleteOne(
        {_id:new mongodb.ObjectId(req.params.id)})
    res.send("done")
})
app.listen(8080);