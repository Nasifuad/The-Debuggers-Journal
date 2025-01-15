import { Schema, model } from "mongoose";

const userShcema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export const User = model("User", userShcema);
