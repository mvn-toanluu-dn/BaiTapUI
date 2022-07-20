import React from "react";
import { FaCheck } from "react-icons/fa";
import { IMAGES } from "../../../../assets/images";

function About() {
  return (
    <section className="section-about section-padding">
      <div className="container">
        <div className="about">
          <h3 className="section-sub-title">Who we are</h3>
          <h2 className="section-title">
            We specialise in helping our customers digitise their business
          </h2>
        </div>
        <div className="section-about-content">
          <div className="flex content">
            <div className="about-img col-6">
              <div className="abshape">
                <img src={IMAGES.abshape} alt="abshape" />
              </div>
              <div className="about-1">
                <img src={IMAGES.about1} alt="about1" />
              </div>
              <div className="about-2">
                <img src={IMAGES.about2} alt="about2" />
              </div>
              <div className="about-3">
                <img src={IMAGES.about3} alt="about3" />
              </div>
            </div>
            <div className="about-content col-6">
              <div className="about-text">
                <h3 className="title">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote technology
                </h3>
                <p>
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                  for all your software development needs.
                </p>
                <div className="about-author-list">
                  <div className="about-list">
                    <ul className="check">
                      <li className="check-item">
                        <i className="check-list-icon">
                          <FaCheck />
                        </i>
                        <a href="/#" className="check-list-text">
                          {" "}
                          We always focus on technical excellence
                        </a>
                      </li>
                      <li className="check-item mt-15">
                        {" "}
                        <i className="check-list-icon">
                          <FaCheck />
                        </i>
                        <a href="/#" className="check-list-text">
                          {" "}
                          Wherever you’re going, we bring ideas and excitement
                        </a>
                      </li>
                      <li className="check-item mt-15">
                        {" "}
                        <i className="check-list-icon">
                          <FaCheck />
                        </i>
                        <a href="/#" className="check-list-text">
                          {" "}
                          We’re consultants, guides, and partners for brands
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="about-author">
                    <div className="author-text">
                      <h4 className="name">Mita Walker</h4>
                      <span className="designation">CEO, Techmax</span>
                    </div>
                    <div className="author-sign">
                      <img src={IMAGES.sign2} alt="sign2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
