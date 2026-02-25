import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB= async ()=>{
    try{
    const connectionInstant= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`connection successs !! DB_host${connectionInstant.connection.host}`)
    }catch(error){
        console.log(error,"mongosseDB connection failed")
        process.exit(1)
    }
}

export default connectDB