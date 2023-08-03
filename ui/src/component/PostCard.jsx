import React from "react";
import avatar from "../img/avatar.png";
import moment from "moment";
import { Navigate, useNavigate } from "react-router-dom";

export default function PostCard({ posts }) {
const navigate = useNavigate()

  const getPostDetails = async (postId) => {
    console.log(postId)
    navigate(`/${postId}`)
  };
  return (
    <>
      {posts?.map((post) => (
        <div
          className="post-box tech"
          key={post._id}
          onClick={() => getPostDetails(post._id)}
        >
          <img
            src={`http://localhost:8000/${post.image}`}
            alt=""
            className="post-img"
          />
          <h2 className="category">{post.category}</h2>
          <a href="" className="post-title">
            {post.title}
          </a>
          <span className="post-date">
            {moment(post.createdAt).format("ll")}
          </span>
          <p className="post-description">{post.content}</p>
          <div className="profile">
            <img src={avatar} alt="" className="profile-img" />
            <span className="profile-name">{post.username}</span>
          </div>
        </div>
      ))}
    </>
  );
}
