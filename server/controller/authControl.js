import { Blog } from "../models/journalModel.js";

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
