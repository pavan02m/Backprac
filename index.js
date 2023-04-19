import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import hotelRoute from "./routes/hotel.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// import roomRoute from "./routes/room.route.js";

const app = express();
dotenv.config();
mongoose.set('strictQuery', false);

// const connect = async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL_OFF);
//         console.log("DB Connected successfully");
//     } catch (error) {
//         console.log(error);
//     }
// }

app.use(express.json());
app.use(cookieParser());
// app.use(cors())

app.use("/api/auth/",authRoute);
// app.use("/api/auth/",userRoute);
app.use("/api/hotels",hotelRoute);
// app.use("/api/auth/",roomRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({message :errorMessage, stack: err.stack});
})

app.get("/",(req,res)=>{
    res.json("hello")
})

module.exports = app
// app.listen(8080,()=>{
//     connect();
//     console.log("server is listening to port 8080");
// });
