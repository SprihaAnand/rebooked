import React from "react";
import "./Home.css";
import homeCover from "../assets/images/homeCover.png";
function Home() {
  return (
    <div>
      <div class="wrapper">
        <main>
          <div class="home-page">
            <div class="block">
              <h1>REBOOKED</h1>
              <p class="intro">
                Welcome to Rebooked, we are dedicated to providing cheaper
                second-hand books to those who may not have the financial means
                to purchase new books.We understand that buying new books can be
                expensive, and not everyone can afford to do so. That’s why we
                have created a platform where individuals can donate their
                gently used books, and those in need can purchase them at an
                affordable price. By doing so, we hope to promote literacy,
                improve access to information, and create a more equitable
                society. We believe that every book has a story to tell, and by
                sharing these stories, we can create a better understanding of
                the world and the people in it. With Rebooked, we aim to not
                only provide books, but also to foster a love of reading and
                learning, and to create a community of people who share this
                passion.
              </p>
            </div>
            <div class="block">
              <img src={homeCover} alt="An illustration of me in profile" />
            </div>
          </div>
        </main>

        <footer>
          <small>Made with 🤍</small>
        </footer>
      </div>
    </div>
  );
}

export default Home;
