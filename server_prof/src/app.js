import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/user.route.js";
export const app = express();

//middlewares
app.use(
  cors({
    origin: "localhost:5173" || "*",
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "50mb",
    extended: true,
  })
);
app.use(urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

//routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/v1/user", router);
