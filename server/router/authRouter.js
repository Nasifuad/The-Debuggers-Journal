import { Router } from "express";
import {
  homepage,
  createBlog,
  signup,
  login,
} from "../controller/authControl.js";
import { JoiValidatorSignup } from "../middleWareValidator/validatorMiddleWare.js";
import { joiUserSchemaSignup } from "../JoiValidator/JoiValidator.js";

export const router = Router();

router.route("/homepage").get(homepage);
router.route("/createBlog").post(createBlog);
router.route("/signup").post(JoiValidatorSignup(joiUserSchemaSignup), signup);
router.route("/login").post(login);
// router.route("/editBlog").patch(editBlog) ;
// router.route("/deleteBlog").delete(deleteBlog);
