
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})

console.log("helo world")
connectDB(process.env.MONGO_URI || 'mongodb+srv://gsb021:Ganesh@cluster0.77m69.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')