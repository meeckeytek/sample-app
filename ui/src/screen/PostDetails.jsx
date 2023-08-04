import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
import api from "../axios";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    api
      .get(`/${params?.postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [params?.postId]);
  return (
    <>
      <Header />

      <section className="about container" id="about">
        <div className="contentBx">
          <h2 className="titleText">{post?.title}</h2>
          <p className="title-text">{post?.content}</p>
          <span className="post-date">
            {moment(post?.createdAt).format("ll")}
          </span>
        </div>

        <div className="imgBx">
          <img
            src={`http://localhost:8000/${post?.image}`}
            alt=""
            className="fitBg"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
