const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, default: false },
    content: { type: String, required: true },
    profileImg: { type: String, required: true },
    userName: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", postSchema);