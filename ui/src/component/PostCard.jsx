import React from "react";
import avatar from "../img/avatar.png";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function PostCard({ posts }) {
const navigate = useNavigate()
  const getPostDetails = async (postId) => {
    navigate(`/${postId}`)
  };
  return (
    <>
      {posts?.length > 0 ? posts.map((post) => (
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
          <a href="" className="post-title max-lines">
            {post.title}
          </a>
          <span className="post-date">
            {moment(post.createdAt).format("ll")}
          </span>
          <p className="post-description max-lines">{post.content}</p>
          <div className="profile">
            <img src={avatar} alt="" className="profile-img" />
            <span className="profile-name max-lines">{post.username}</span>
          </div>
        </div>
      )) : (""
      )}
    </>
  );
}
