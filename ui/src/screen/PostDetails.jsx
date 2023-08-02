import React from 'react'

import about from "../img/about.png"
import profileimg from "../img/testi1.jpg"

export default function PostDetails() {
  return (
    <>
    <header>
        <div className="nav container">
            <a href="#" className="logo">Code <span>myhobby</span></a>
            <a href="#" className="login">Post</a>
        </div>
    </header>

    <section className="home" id="home">
        <div className="home-text container">
            <h2 className="home-title">Trend Blogger</h2>
            <span className="home-subtitle">Your source of great content</span>
        </div>
    </section>

    <section className="about container" id="about">
        <div className="contentBx">
            <h2 className="titleText">Catch up with the trending topics</h2>
            <p className="title-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos consequuntur voluptate dolorum totam provident ducimus cupiditate dolore doloribus repellat. Saepe ad fugit similique quis quam. Odio suscipit incidunt distinctio.
                <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis libero pariatur ipsum suscipit voluptates aut, repellendus quos dolor autem, natus laboriosam consectetur maxime cumque, sunt magni optio? Veritatis, ea?
            </p>
            <a href="#" className="btn2">Read more</a>
        </div>
        <div className="imgBx">
            <img src={about} alt="" className="fitBg"/>
        </div>
    </section>    
    <footer>
        <div className="footer-container">
            <div className="sec aboutus">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quisquam minus quo illo numquam vel incidunt pariatur hic commodi expedita tempora praesentium at iure fugiat ea, quam laborum aperiam veritatis.</p>
                <ul className="sci">
                    <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                    <li><a href="#"><i className="bx bxl-instagram"></i></a></li>
                    <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="sec quicklinks">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div className="sec contactBx">
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span><i className='bx bxs-map'></i></span>
                        <span>6444 London street <br/> Brighton PA 33445 <br/> Uk</span>
                    </li>
                    <li>
                        <span><i className='bx bx-envelope' ></i></span>
                        <p><a href="mailto:codemyhobby9@gmail.com">Codemyhobby9@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}
