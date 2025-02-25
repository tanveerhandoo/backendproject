import dotenv from 'dotenv'
import connectDB from './db/dbconnect.js';
import { app } from './app.js';
dotenv.config({
    path:'./env'})
connectDB()
.then(()=>{
    app.on('error',(error)=>{
        console.error(`Server error: ${error.message}`)
        throw error 
    })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is listening at http://localhost:${process.env.PORT}`);    
  })
})
.catch((error)=>{
    console.log("Error connecting to DB",error)
})