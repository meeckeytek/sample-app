import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

import about from "../img/about.png";

export default function PostDetails() {
  return (
    <>
      <Header />

      <section className="about container" id="about">
        <div className="contentBx">
          <h2 className="titleText">Catch up with the trending topics</h2>
          <p className="title-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos
            consequuntur voluptate dolorum totam provident ducimus cupiditate
            dolore doloribus repellat. Saepe ad fugit similique quis quam. Odio
            suscipit incidunt distinctio.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            blanditiis libero pariatur ipsum suscipit voluptates aut,
            repellendus quos dolor autem, natus laboriosam consectetur maxime
            cumque, sunt magni optio? Veritatis, ea?
          </p>
        </div>
        <div className="imgBx">
          <img src={about} alt="" className="fitBg" />
        </div>
      </section>
      <Footer />
    </>
  );
}
