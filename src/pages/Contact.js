import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div>
      <section class="contact-address-area">
        <div class="container">
          <div class="sec-title-style1 text-center max-width">
            <div class="title">Contact Us</div>
          </div>
          <div class="contact-address-box row">
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder"></div>
              <h3>Get in touch!</h3>
              <h2>Ask us something or give suggestions</h2>
            </div>

            <div class="col-sm-4 single-contact-address-box main-branch">
              <h3>Contacts</h3>
              <div class="inner">
                <ul>
                  <li>
                    <div class="title">
                      <h4>Address:</h4>
                    </div>
                    <div class="text">
                      <p>
                        NIT Hamirpur, Hamirpur
                        <br /> Himachal, India
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Phone:</h4>
                    </div>
                    <div class="text">
                      <p>
                        +123 456 789 <br />
                        +91 6230 219447
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Socials </h4>
                    </div>
                    <div class="text">
                      <p>
                        Insta@1
                        <br /> Insta@2
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
