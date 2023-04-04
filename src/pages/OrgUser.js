import React from "react";
import "./OrgUser.css";
import person from "../assets/images/person.jpg";
import person2 from "../assets/images/person2.jpeg";
import person3 from "../assets/images/person3.jpg";

function OrgUser() {
  return (
    <div>
      <h1>Users who are a part of our organisation</h1>
      <div className="Pcontainer">
        <div class="profile-card">
          <div class="profile-cover">
            <div class="profile-avatar">
              <a href="#">
                <img src={person} alt="Anis M" />
              </a>
            </div>
          </div>
          <div class="profile-info">
            <h1>Aryan</h1>

            <div class="clear"></div>
          </div>

          <div class="profile-content">
            <ul>
              <button>
                <a href="/wishlist">
                  <li>Wishlist</li>
                </a>{" "}
              </button>
              <button>
                <li>Connect</li>
              </button>
            </ul>
            <div class="clear"></div>
          </div>
        </div>

        <div class="profile-card">
          <div class="profile-cover">
            <div class="profile-avatar">
              <a href="#">
                <img src={person2} alt="Anis M" />
              </a>
            </div>
          </div>
          <div class="profile-info">
            <h1>Manya</h1>

            <div class="clear"></div>
          </div>

          <div class="profile-content">
            <ul>
              <button>
                <a href="/wishlist">
                  <li>Wishlist</li>
                </a>
              </button>
              <button>
                <li>Connect</li>
              </button>
            </ul>
            <div class="clear"></div>
          </div>
        </div>

        <div class="profile-card">
          <div class="profile-cover">
            <div class="profile-avatar">
              <a href="#">
                <img src={person3} alt="Anis M" />
              </a>
            </div>
          </div>
          <div class="profile-info">
            <h1>Satvik</h1>

            <div class="clear"></div>
          </div>

          <div class="profile-content">
            <ul>
              <button>
                <a href="/wishlist">
                  <li>Wishlist</li>
                </a>
              </button>
              <button>
                <li>Connect</li>
              </button>
            </ul>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrgUser;
