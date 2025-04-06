import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

app.use(cors()); //always put cors before writing middleware
app.use(bodyparser.json());
app.use(express.json());
dotenv.config();
app.use("/api", route);
 

console.log("Routes are being registered...");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

mongoose
        .connect(MONGO_URL)
        .then(() => {
            console.log("db connected successfully")
            app.listen(PORT, () => {
                console.log(`server running at port ${PORT}`)
            })
        })
        .catch((error) => console.log(error))
 
        app.use((req, res, next) => {
            console.log(`🔍 Incoming request: ${req.method} ${req.url}`);
            console.log("Headers:", req.headers);
            console.log("Body:", req.body);
            next();
        });
