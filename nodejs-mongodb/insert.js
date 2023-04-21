const dbConnect=require("./mongodb");

const insert=async ()=>{
    const db=await dbConnect();
    const result=await db.insertMany(//db.insertOne for single data
        
       [ {
            name:"note S",
            price:"40000",
            brand:"vivio",
            ram:"8gb"
        },
        {
            name:"narzo",
            price:"40000",
            brand:"realme",
            ram:"12gb"
        },
        {
            name:"Iqoo",
            price:"40000",
            brand:"z7",
            ram:"8gb"
        }]
    
    );
    if(result.acknowledged)
    {
        console.log("data inserted")
    }
}

insert();