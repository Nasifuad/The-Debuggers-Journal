import { Router } from "express";
import {
  homepage,
  createBlog,
  signup,
  login,
} from "../controller/authControl.js";

export const router = Router();

router.route("/homepage").get(homepage);
router.route("/createBlog").post(createBlog);
router.route("/signup").post(signup);
router.route("/login").post(login);
// router.route("/editBlog").patch(editBlog) ;
// router.route("/deleteBlog").delete(deleteBlog);
