import "dotenv/config";
import express from "express";
import { connectDB } from "./database/db.js";
import cors from "cors";
import { router } from "./router/authRouter.js";
import { errorMiddleware } from "./middleWareValidator/errorMiddleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", router);

// Catch-all for invalid paths
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error Middleware (last in the stack)
app.use(errorMiddleware);

// Database Connection and Server Initialization
(async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit process if DB connection fails
  }
})();
