import express  from "express";
import cors from "cors"
import { connectDB } from "./db/db.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'

//config

const app=express()
const port=process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//api endpoints
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
  res.send("Server is working")
}) 

app.listen(port,()=>{
  console.log( `Server Running in http://localhost:${port}`)
})

//mongodb+srv://Enigma:sangram123@cluster0.gv9cvwf.mongodb.net/?