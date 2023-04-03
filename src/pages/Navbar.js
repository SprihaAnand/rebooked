import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <div>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <img src={logo} alt="" />
          <div class="nav-title">Rebook</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="/" target="_blank" alt="">
            Home
          </a>
          <a href="/" target="_blank" alt="">
            About
          </a>
          <a href="/" target="_blank" alt="">
            Exchange
          </a>
          <a href="/" target="_blank" alt="">
            Rebook
          </a>
          <a href="/" target="_blank" alt="">
            Donate
          </a>
          <a href="/" target="_blank" alt="">
            Schools
          </a>
          <a href="/" target="_blank" alt="">
            Contact
          </a>

          <a href="/" target="_blank" alt="">
            LogIn / Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
