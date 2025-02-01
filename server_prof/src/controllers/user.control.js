import { AsynchHandler } from "../utils/AsyncHandler.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";
import { Consumer } from "../models/user.model.js";
//controller functions
export const userRegister = AsynchHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("Multer file", req.files);
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if (!avatarLocalPath) {
      throw new ApiError(401, "Avatar is required");
    }
    const avatar = await uploadCloudinary(avatarLocalPath);
    const coverImage = await uploadCloudinary(coverImageLocalPath);
    //check for successfull upload on cloudinary
    console.log("This is from cloudinary", avatar, coverImage);
    if (!avatar || !coverImage) {
      throw new ApiError(401, "Avatar or cover image upload failed");
    }
    const newUser = await Consumer.create({
      username,
      email,
      password: password.toString(),
      avatar,
      coverImage,
    });
    res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    throw new ApiError(401, error.message);
  }
});
