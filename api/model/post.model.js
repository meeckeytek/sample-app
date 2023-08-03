const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, default: false },
    content: { type: String, required: true },
    username: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", postSchema);