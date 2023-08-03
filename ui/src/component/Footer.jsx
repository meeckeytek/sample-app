import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="sec aboutus">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            quisquam minus quo illo numquam vel incidunt pariatur hic commodi
            expedita tempora praesentium at iure fugiat ea, quam laborum aperiam
            veritatis.
          </p>
        </div>
        <div className="sec quicklinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        <div className="sec contactBx">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <i className="bx bx-envelope"></i>
              </span>
              <p>
                <a href="mailto:meeckeytek@gmail.com">
                 Email: meeckeytek@gmail.com
                </a>
              </p>
            </li>
            <li>
              <span>
                <i className="bx bx-envelope"></i>
              </span>
              <p>
                <a href="mailto:meeckeytek@gmail.com">
                 Phone: +234 7068716069
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
