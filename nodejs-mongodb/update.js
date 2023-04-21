const dbConnect=require("./mongodb");

const updateData=async()=>{
    let data=await dbConnect();
    let result=await data.updateOne(//for all data use update
        {
           name:"s22ultra"},{
            $set:{name:"s23ultra"}
           } 
        
    )
    console.log(result);

}

updateData();