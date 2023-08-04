import axios from "axios";

const AUTH_TOKEN = localStorage.getItem("userToken");

const api = axios.create({
  // baseURL: "http://localhost:5011/api/v1",
  baseURL: "http://localhost:8000/api/v1/post",
});

export default api;

// //All Posts
// export const allPosts = () => ;

// //New Post
// export const newUser = (values) =>
//  

// //Post details
// export const deleteUser = (postId) =>
//   api.delete(`/${postId}`).then((res) => res.data);
