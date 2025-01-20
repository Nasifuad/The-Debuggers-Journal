import { Schema, model } from "mongoose";

const blogShcema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
