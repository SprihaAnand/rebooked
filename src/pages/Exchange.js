import React from "react";
import "./Exchange.css";
import book1 from "../assets/images/ExBook1.jpg";
import book2 from "../assets/images/ExBook2.jpeg";
import book3 from "../assets/images/ExBook3.jpg";

function Exchange() {
  return (
    <div>
      <h1>Exchange</h1>
      <ul class="tweets">
        <li class="tweet animated">
          <div>
            <div class="person">
              <img src={book1} alt="" />
              <div class="details">
                <h4>Shadow Born</h4>
                <h5>Owner: ...</h5>
                <p>
                  Shadowborn increases the angle at which the Killer can be
                  blinded by FlashliShadowborn increases the angle at which the
                  Killer can be blinded by Flashlights, which should be taken
                  into consideration when using this Perk. Shadowborn had its
                  original brightness modifier removed due to the Developers
                  wanting more control over the lighting conditions on the Maps.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="tweet animated">
          <div>
            <div class="person">
              <img src={book2} alt="" />
              <div class="details">
                <h4>A Women Warrior</h4>
                <h5>Owner: ...</h5>
                <p>
                  The Woman Warrior: Memoirs of a Girlhood Among Ghosts is a
                  book written by Chinese American author Maxine Hong Kingston .
                  <br />
                  The specific genre of The Woman Warrior has been disputed due
                  to Kingston's blend of perspectives, specifically traditional
                  Chinese folktale and memoir. With this mixture, Kingston tries
                  to provide her audience with the cultural, familial, and
                  personal context needed to understand her unique position as a
                  first-generation Chinese-American woman.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="tweet animated">
          <div class="person">
            <img src={book3} alt="" />
            <div class="details">
              <h4>Harry Potter</h4>
              <h5>Owner: ...</h5>
              <p>
                Harry Potter is a series of seven fantasy novels written by
                British author J. K. Rowling. The novels chronicle the lives of
                a young wizard, Harry Potter, and his friends Hermione Granger
                and Ron Weasley, all of whom are students at Hogwarts School of
                Witchcraft and Wizardry. The main story arc concerns Harry's
                conflict with Lord Voldemort, a dark wizard who intends to
                become immortal, overthrow the wizard governing body known as
                the Ministry of Magic and subjugate all wizards and Muggles
                (non-magical people).
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Exchange;
