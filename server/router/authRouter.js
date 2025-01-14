import { Router } from "express";
import { homepage, createBlog } from "../controller/authControl.js";

export const router = Router();

router.route("/homepage").get(homepage);
router.route("/createBlog").post(createBlog);
// router.route("/editBlog").patch(editBlog);
// router.route("/deleteBlog").delete(deleteBlog);
