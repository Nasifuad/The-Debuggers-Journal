import Joi from "joi";

// const { string, object } = Joi;
export const joiUserSchemaSignup = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.base": "Username should be a string.",
    "string.empty": "Username is required.",
    "string.min": "Username must be at least 3 characters.",
    "string.max": "Username cannot exceed 30 characters.",
    "any.required": "Username is a required field.",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a string.",
    "string.empty": "Email is required.",
    "string.email": "Invalid email format.",
    "any.required": "Email is a required field.",
  }),
  password: Joi.string().min(3).max(30).required().messages({
    "string.base": "Password should be a string.",
    "string.empty": "Password is required.",
    "string.min": "Password must be at least 3 characters.",
    "string.max": "Password cannot exceed 30 characters.",
    "any.required": "Password is a required field.",
  }),
}).unknown(true);
