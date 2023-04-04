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
        <a className="profile" href="/profile" alt="">
          Profile
        </a>
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

          <a href="/exchange" alt="">
            Exchange
          </a>
          <a href="/rebook" alt="">
            Rebook
          </a>
          <a href="/donate" alt="">
            Donate
          </a>
          <a href="/school" alt="">
            Schools
          </a>
          <a href="/organisation" alt="">
            Organisations
          </a>
          <a href="/about" alt="">
            About
          </a>
          <a href="/contact" alt="">
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
