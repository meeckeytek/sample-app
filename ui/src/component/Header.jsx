import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="nav container">
            <Link to="/" className="logo">
              <span>Blog</span>
            </Link>
            <Link to="/post" className="login">
              Post
            </Link>
        </div>
      </header>

      <section className="home" id="home">
        <div className="home-text container">
          <h2 className="home-title">Meeckey Tek. Blog</h2>
          <span className="home-subtitle">Your source of great content</span>
        </div>
      </section>
    </>
  );
}
