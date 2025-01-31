import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express();

//middlewares
app.use(
  cors({
    origin: "*",
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
