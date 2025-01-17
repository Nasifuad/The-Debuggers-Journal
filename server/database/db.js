import mongoose from "mongoose";
// import dotenv from "dotenv";
// export const result = dotenv.config();
// console.log(result);
const URI = process.env.MONGO_URI;
// "mongodb+srv://nasifuad007:nasif123@journal.3pezu.mongodb.net/Journal?retryWrites=true&w=majority&appName=Journal";
console.log("URI", process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Data base connected successfully");
  } catch (error) {
    console.log("Error occurd", error);
    process.exit(1);
  }
};
