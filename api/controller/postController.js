const Post = require("../model/post.model");

exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  if (posts.length < 1) {
    res.status(200).json({ messge: "No post found" });
  }
  res.status(200).json(posts);
};

exports.getPostDetails = async (req, res) => {
  let post;
  try {
    post = await Post.findById(req.params.postId);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal service error" });
  }

  if (!post) {
    return res.status(404).json({ message: "Invalid post Id" });
  }

  res.status(200).json(post);
};

exports.newPost = async (req, res) => {
  const { image, title, type, content, profileImg, userName } = req.body;
  if (!image || !title || !type || !content || !profileImg || !userName) {
    return res
      .status(429)
      .json({ message: "Kindly fill all the required fields" });
  }
  const post = new Post({
    image,
    title,
    type,
    content,
    profileImg,
    userName,
  });

  try {
    let createPost = await post.save();
    res.status(201).json({ post: createPost });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Could not save post, please try again later" });
  }
};
