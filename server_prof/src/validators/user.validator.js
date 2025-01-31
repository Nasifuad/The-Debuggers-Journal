import joi from "joi";

const userValidatorShcema = joi
  .object({
    username: joi.string().min(6).required().messages({
      "string.base": "Username should be a string.",
      "string.empty": "Username is required.",
      "string.min": "Username must be at least 6 characters.",
      "any.required": "Username is a required field.",
    }),
    email: joi.string().email().required().messages({
      "string.base": "Email should be a string.",
      "string.empty": "Email is required.",
      "string.email": "Invalid email format.",
      "any.required": "Email is a required field.",
    }),
    password: joi.string().min(6).required().messages({
      "string.base": "Password should be a string.",
      "string.empty": "Password is required.",
      "string.min": "Password must be at least 6 characters.",
      "any.required": "Password is a required field.",
    }),
    // avatar: joi.string().required().messages({
    //   "string.base": "Avatar should be a string.",
    //   "string.empty": "Avatar is required.",
    //   "any.required": "Avatar is a required field.",
    // }),
  })
  .unknown(true);

export default userValidatorShcema;
