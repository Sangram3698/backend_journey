import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://Enigma:sangram123@cluster0.gv9cvwf.mongodb.net/hotelSystem').then(()=>console.log("DB connected"))
}