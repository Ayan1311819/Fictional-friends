import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Db connected!");
    }
    catch(error) {
        console.error("Error connecting to db",error);
        process.exit(1);
    }
};