import React from "react";
import "./Donate.css";
function Donate() {
  return (
    <div>
      <div class="login-page">
        <div class="formd">
          <form class="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p class="message">
              Already registered? <a href="/">Sign In</a>
            </p>
          </form>
          <form class="login-form">
            <input type="link" placeholder="Upload Picture" />
            <input type="text" placeholder="Book Name" />
            <input type="text" placeholder="Book Category" />
            <input type="text" placeholder="Book Description" />

            <button>Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
