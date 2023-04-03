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
          <a href="/" alt="">
            Home
          </a>
          <a href="/about" alt="">
            About
          </a>
          <a href="/exchange" alt="">
            Exchange
          </a>
          <a href="/rebook" alt="">
            Rebook
          </a>
          <a href="/" alt="">
            Donate
          </a>
          <a href="/" alt="">
            Schools
          </a>
          <a href="/" alt="">
            Contact
          </a>

          <a href="/signup" alt="">
            LogIn / Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
