const express = require("express");
const route = express.Router();
const postController = require("../controller/postController");

route.get("/", postController.getPosts);

route.get("/:postId", postController.getPostDetails);

route.post("/", postController.newPost);

module.exports = route;
