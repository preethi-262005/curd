import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#000" }}>
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          CRUD Copyright © 2024 CRUD - All rights reserved,
          Designed By: Preethi
        </div>
      </div>
    </footer>
  );
}

export default Footer;
