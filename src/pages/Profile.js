import React from "react";
import "./Profile.css";
import person from "../assets/images/person.jpg";
function Profile() {
  return (
    <div>
      <h1 class="title-pen"> User Profile</h1>
      <div class="user-profile">
        <img class="avatar" src={person} alt="Ash" />
        <div class="username">Aryan</div>
        <div class="bio">Donator| 200 points</div>
        <div class="description">Status | Give your books a new life.</div>
        <ul class="data">
          <li>
            <span class="entypo-heart"> 4 Donated</span>
          </li>
          <li>
            <span class="entypo-eye"> 8 Exchanged</span>
          </li>
          <li>
            <span class="entypo-user"> 3 Organisations</span>
          </li>
        </ul>
        <ul class="data">
          <li>
            <span class="Donate"> + Donate</span>
          </li>
        </ul>
        <ul class="data">
          <li>
            <span class="Donate"> Wishlist</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
