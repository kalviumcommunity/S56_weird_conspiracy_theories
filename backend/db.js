const mongoose=require("mongoose")
require("dotenv").config()
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("success in connecting to the database")
    }catch(error){
        console.error("failed to connect to the database")
    }
}
let mongooseConnect=()=>{
    return mongoose.connection.readyState===1?"connected successfully":"not connected"
}
module.exports={connectDB,mongooseConnect}