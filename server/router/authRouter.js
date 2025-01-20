import { Router } from "express";
import {
  homepage,
  createBlog,
  signup,
  login,
  deleteUser,
  getBlogs,
} from "../controller/authControl.js";
import {
  JoiValidatorBlog,
  JoiValidatorSignup,
} from "../middleWareValidator/validatorMiddleWare.js";
import {
  joiBlogShcema,
  joiUserSchemaSignup,
} from "../JoiValidator/JoiValidator.js";

export const router = Router();

router.route("/homepage").get(homepage);
// JoiValidatorBlog(joiBlogShcema),
router.route("/createBlog").post(createBlog);
router.route("/blogs").get(getBlogs);
router.route("/signup").post(JoiValidatorSignup(joiUserSchemaSignup), signup);
router.route("/login").post(login);
router.route("/delete").delete(deleteUser);
router.route("");
