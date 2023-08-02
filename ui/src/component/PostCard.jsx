import React from "react";

export default function PostCard({posts}) {
    console.log(typeof(posts))
  return (
    <>
      {posts?.map((post) => (
        <div className="post-box tech" key={post.id}>
          <img src={post.img} alt="" className="post-img" />
          <h2 className="category">{post.type}</h2>
          <a href="#" className="post-title">
            {post.title}
          </a>
          <span className="post-date">{post.date}</span>
          <p className="post-description">{post.content}</p>
          <div className="profile">
            <img src={post.profileImage} alt="" className="profile-img" />
            <span className="profile-name">{post.userName}</span>
          </div>
        </div>
      ))}
    </>
  );
}
