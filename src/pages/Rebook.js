import React from "react";
import "./Rebook.css";
import book1 from "../assets/images/rebook1.jpeg";
import book2 from "../assets/images/rebook2.jpg";
import book3 from "../assets/images/rebook3.jpg";

function Rebook() {
  return (
    <div>
      <h1>Rebook</h1>
      <h3 className="alt">Browse second hand donated books</h3>
      <ul class="tweets">
        <li class="tweet animated">
          <div>
            <div class="person">
              <img src={book1} alt="" />
              <div class="details">
                <h4>Shadow Born</h4>
                <h5>Donated By: ...</h5>
                <p>
                  NCERT Solutions for Class 10 Maths are solved by experts of
                  LearnCBSE.in in order to help students to obtain excellent
                  marks in their board examination. All the questions and
                  answers that are present in the CBSE NCERT Books has been
                  included in this page. We have provided all the Class 10 Maths
                  NCERT Solutions with a detailed explanation i.e., we have
                  solved all the question with step by step solutions in
                  understandable language.
                </p>
                <button className="bookButton">Book</button>
              </div>
            </div>
          </div>
        </li>
        <li class="tweet animated">
          <div>
            <div class="person">
              <img src={book2} alt="" />
              <div class="details">
                <h4>NCERT Science 10th</h4>
                <h5>Donated By: ...</h5>
                <p>
                  NCERT Books Class 10 Science: The National Council of
                  Educational Research and Training (NCERT) publishes Science
                  textbooks for Class 10. The NCERT Class 10th Science textbooks
                  are well known for it’s updated and thoroughly revised
                  syllabus. The NCERT Science Books are based on the latest exam
                  pattern and CBSE syllabus.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="tweet animated">
          <div class="person">
            <img src={book3} alt="" />
            <div class="details">
              <h4>NCERT English X</h4>
              <h5>Donated By: ...</h5>
              <p>
                First Flight, a textbook in English for Class X, is based on the
                new syllabus in English which was prepared as a follow-up to the
                National Curriculum Framework, 2005. Every single question in
                the 2022 Board Exams will come strictly from this NCERT Class 10
                English (Footprints Without Feet and First Flight)
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Rebook;
