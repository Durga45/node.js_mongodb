const dbConnect=require("./mongodb");

const deleteData=async()=>{
    let data=await dbConnect();
    let result=await data.deleteOne(//for toomany data use deleteMany
        { name:"s20fe"}
          )
    console.log(result)
    if(result.acknowledged){
        console.log("deleted")
    }
}
deleteData();