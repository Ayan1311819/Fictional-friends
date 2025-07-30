import express from "express"; //You can't use this by default, thats diff syntax
//const express = require("express");
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimit from "./config/Upstash.js";


dotenv.config();
const app = express();

//Middleware: func between req-res chain. Server side process before going to route.
//ex: auth check or rate limiting.
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(async(req,res,next) => {
    try{
        const {success} = await ratelimit.limit("my-limit-key");
        //console.log("Rate limit result:", success);
        if(!success){
            return res.status(429).json({
                message: "Too many requests, please try again later."
            });
        }
        next();
    }catch(error) {
        console.log("Rate limit error", error);
        next(error);
    }
}); // May create a separate folder of Middlewares 
app.use("/api/notes", notesRoutes);
//app.use("/api/product") -> routing its specific routing logic
connectDB().then(() => {
    app.listen(5001,'0.0.0.0', () => {
        console.log("Server started baby!");
    });
});



