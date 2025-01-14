import mongoose from "mongoose";
const URI =
  "mongodb+srv://nasifuad007:nasif123@journal.3pezu.mongodb.net/Journal?retryWrites=true&w=majority&appName=Journal";

export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Data base connected successfully");
  } catch (error) {
    console.log("Error occurd", error);
    process.exit(1);
  }
};
