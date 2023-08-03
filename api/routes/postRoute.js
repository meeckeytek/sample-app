const express = require("express");
const route = express.Router();
const postController = require("../controller/postController");
const upload = require("../middleware/upload")

route.get("/", postController.getPosts);

route.get("/:postId", postController.getPostDetails);

route.post("/", upload.single("image"), postController.newPost);

module.exports = route;
