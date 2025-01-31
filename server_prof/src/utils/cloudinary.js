import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// Load environment variables
dotenv.config({ path: "./cloud.env" });

// Debug environment variables
console.log("Environment Variables:");
console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("Cloud API Key:", process.env.CLOUD_API_KEY);
console.log("Cloud API Secret:", process.env.CLOUD_API_SECRET);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "dt2wvbs5q",
  api_key: process.env.CLOUD_API_KEY || 841895357524659,
  api_secret: process.env.CLOUD_API_SECRET || "hq7GBoXBUANKYO6tXv-OXXBqsLo",
});

// Debug Cloudinary configuration
console.log("Cloudinary Config:", cloudinary.config());

/**
 * Uploads a file to Cloudinary.
 * @param {string} localFilePath - The path to the file to be uploaded.
 * @returns {Promise<string|null>} - The URL of the uploaded file or null if the upload fails.
 */
export const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlink(localFilePath, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      }
    });
    return response.url;
  } catch (error) {
    fs.unlink(localFilePath, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      }
    });
    console.error("Error uploading file to Cloudinary:", error);
    return null;
  }
};
