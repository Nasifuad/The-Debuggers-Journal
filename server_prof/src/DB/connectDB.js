import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("process.env.MONGO_URI", process.env.MONGO_URI);
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Data base connected successfully", connection.connection.host);
  } catch (error) {
    console.log("Severe problem with DB", error);
    process.exit(1);
  }
};
export { connectDB };
