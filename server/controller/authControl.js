import { Blog } from "../models/journalModel.js";
import { User } from "../models/userModel.js";

export const homepage = async (req, res, next) => {
  try {
    const blogData = await Blog.find();
    res.json(blogData);
  } catch (error) {
    next(error);
  }
};
export const createBlog = async (req, res, next) => {
  try {
    const blogData = req.body;
    const createBlog = await Blog.create(blogData);
    res.json({ data: blogData, blog: createBlog });
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res, next) => {
  try {
    const userData = req.body;
    const checkUser = await User.findOne({ username: userData.username });

    if (checkUser) {
      return res.json({ message: "User already exists" });
    }
    const createUser = await User.create(userData);
    return res.json({
      message: "User created successfully",
      data: userData,
      user: createUser,
      token: await createUser.getToken(),
    });
  } catch (error) {
    // res.json({ error: "Error From authControl JS", error });
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log("Userfrom", username, password);
    const user = await User.findOne({ username, password });
    console.log(user);
    if (user) {
      res.json({ message: "Login successful", data: user });
    } else {
      res.json({ message: "Invalid username or password" });
    }
  } catch (error) {
    // res.json({ error: "An internal server error occurred" });
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { username } = req.body; // Destructure username from the request body
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
    const user = await User.findOne({ username });
    console.log("user", user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const deletedBlog = await Blog.findOneAndDelete({ username });

    res.json({ message: "user is deleted", user: user });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};
