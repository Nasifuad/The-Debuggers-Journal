import { Router } from "express";
import { userRegister } from "../controllers/user.control.js";
import { userRegisterValidator } from "../middlewares/userValidator.middleware.js";
import userValidatorShcema from "../validators/user.validator.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();
// userRegisterValidator(userValidatorShcema),
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  userRegister
);

router.route("/hello").get((req, res) => {
  res.send("this is user route");
  console.log("working /hello");
});

export { router };
