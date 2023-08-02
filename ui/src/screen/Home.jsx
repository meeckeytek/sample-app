import React from 'react'

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img10 from "../img/img10.jpg";
import profileimg from "../img/testi1.jpg";
import about from "../img/about.png"

import Header from "../component/Header"
import PostCard from '../component/PostCard'

export default function Home() {

  const posts = [
    {
      id:1,
      img: img1,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    },
    {
      id:2,
      img: img2,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:3,
      img: img3,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:4,
      img: img4,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:5,
      img: img5,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:6,
      img: img6,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:7,
      img: img7,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:8,
      img: img8,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:9,
      img: img2,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }, {
      id:10,
      img: img10,
      type: "TECH",
      title: "Title 1",
      date: "12 Feb 2022",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
      profileImage: profileimg,
      userName: "Mike Emma",
    }
  ];

  return (
    <>
   <Header />
    
    <div className="post container">
        <PostCard posts={posts}/>
    </div>
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
