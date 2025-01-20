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

export const joiBlogShcema = Joi.object({
  title: Joi.string().min(3).max(30).required().messages({
    "string.base": "Title should be a string.",
    "string.empty": "Title is required.",
    "string.min": "Title must be at least 3 characters.",
    "string.max": "Title cannot exceed 30 characters.",
    "any.required": "Title is a required field.",
  }),
  author: Joi.string().min(3).max(30).required().messages({
    "string.base": "Author name should be a string.",
    "string.empty": "Author name is required.",
    "string.min": "Author name must be at least 3 characters.",
    "string.max": "Author name cannot exceed 30 characters.",
    "any.required": "Author name is a required field.",
  }),
  keyword: Joi.string().min(3).max(30).required().messages({
    "string.base": "Keyword should be a string.",
    "string.empty": "Keyword is required.",
    "string.min": "Keyword must be at least 3 characters.",
    "string.max": "Keyword cannot exceed 30 characters.",
    "any.required": "Keyword is a required field.",
  }),
  content: Joi.string().min(3).required().messages({
    "string.base": "Content should be a string.",
    "string.empty": "Content is required.",
    "string.min": "Content must be at least 3 characters.",
    "any.required": "Content is a required field.",
  }),
}).unknown(true);
