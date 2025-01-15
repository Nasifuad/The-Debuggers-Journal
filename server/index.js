import express from "express";
import { connectDB } from "./database/db.js";
import cors from "cors";
import { router } from "./router/authRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
connectDB() && app.listen(3000, () => console.log("Server started"));
