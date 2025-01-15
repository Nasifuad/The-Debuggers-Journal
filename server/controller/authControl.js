import { Blog } from "../models/journalModel.js";
import { User } from "../models/userModel.js";

export const homepage = async (req, res) => {
  try {
    const blogData = await Blog.find();
    res.json(blogData);
  } catch (error) {
    res.send(error);
  }
};
export const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const createBlog = await Blog.create(blogData);
    res.json({ data: blogData, blog: createBlog });
  } catch (error) {
    res.json({ error: "An internal server error occurred" });
  }
};

export const signup = async (req, res) => {
  try {
    const userData = req.body;
    const createUser = await User.create(userData);
    res.json({ data: userData, user: createUser });
  } catch (error) {
    res.json({ error: "An internal server error occurred" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Userfrom", username, password);
    const user = await User.findOne({ username, password });
    console.log(user);
    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.json({ error: "Invalid username or password" });
    }
  } catch (error) {
    res.json({ error: "An internal server error occurred" });
  }
};
