
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./db/indexedDB.js"
dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`app is running at ${PORT} `)
    })
})
.catch((err)=>{
console.log("connect failed db",err)
})





