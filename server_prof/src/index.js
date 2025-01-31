import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { connectDB } from "./DB/connectDB.js";
import { app } from "./app.js";

connectDB()
  .then(async () => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Error in listening to server", error));
