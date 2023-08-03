import React, { useEffect, useState } from "react";
import api from "../axios";
import Footer from "../component/Footer";

import Header from "../component/Header";
import PostCard from "../component/PostCard";

export default function Home() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        // setIsLoading(true)
        setPosts(res.data)
        // setIsLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(isLoading)
  return (
    <>
      <Header />

      <div className="post container">
        <PostCard posts={posts} />
      </div>
      <Footer />
    </>
  );
}
