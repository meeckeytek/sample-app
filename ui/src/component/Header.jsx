import React from 'react'

export default function Header() {
  return (
    <>
      <header>
        <div className="nav container">
            <a href="#" className="logo">Code <span>myhobby</span></a>
            <a href="#" className="login">Sign Up</a>
        </div>
    </header>

    <section className="home" id="home">
        <div className="home-text container">
            <h2 className="home-title">Trend Blogger</h2>
            <span className="home-subtitle">Your source of great content</span>
        </div>
    </section> 
    </>
  )
}
