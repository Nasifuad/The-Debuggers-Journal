// import dotenv from "dotenv";
// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// // Load environment variables
// dotenv.config({ path: "./cloud.env" });

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME || "dt2wvbs5q",
//   api_key: process.env.CLOUD_API_KEY || 841895357524659,
//   api_secret: process.env.CLOUD_API_SECRET || "hq7GBoXBUANKYO6tXv-OXXBqsLo",
// });

// export const uploadCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     // Upload the file to Cloudinary
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });
//     fs.unlink(localFilePath, (err) => {
//       if (err) {
//         console.error("Error deleting local file:", err);
//       }
//     });
//     return response.url;
//   } catch (error) {
//     fs.unlink(localFilePath, (err) => {
//       if (err) {
//         console.error("Error deleting local file:", err);
//       }
//     });
//     console.error("Error uploading file to Cloudinary:", error);
//     return null;
//   }
// };

import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "dt2wvbs5q",
  api_key: process.env.CLOUD_API_KEY || 841895357524659,
  api_secret: process.env.CLOUD_API_SECRET || "hq7GBoXBUANKYO6tXv-OXXBqsLo",
});

// Upload buffer to Cloudinary
export const uploadCloudinary = async (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    // Convert buffer to readable stream
    const bufferStream = new Readable();
    bufferStream.push(buffer);
    bufferStream.push(null);

    // Pipe the buffer stream to Cloudinary upload stream
    bufferStream.pipe(uploadStream);
  });
};
