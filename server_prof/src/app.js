import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/user.route.js";
export const app = express();

//middlewares
const allowedOrigins = [
  "http://localhost:5173",
  "https://the-debuggers-journal-e2f6.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Block the request
      }
    },
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
