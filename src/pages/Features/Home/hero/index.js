import React, { useEffect } from "react";
import { IMAGES } from "../../../../assets/images";
function Hero() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.querySelector(".intro").style.animation =
          "isVisible-text 1.2s ease";
        document.querySelector(".intro").style.opacity = 1;
        document.querySelector(".intro").style.visibility = "visible";
        document.querySelector(".btn-read-more").style.animation =
          "isVisible-text 1.4s ease";
        document.querySelector(".btn-read-more").style.opacity = 1;
        document.querySelector(".btn-read-more").style.visibility = "visible";
      } else {
        document.querySelector(".intro").style.opacity = 1;
        document.querySelector(".intro").style.visibility = "visible";
        document.querySelector(".btn-read-more").style.opacity = 1;
        document.querySelector(".btn-read-more").style.visibility = "visible";
      }
    });
    return () => window.removeEventListener("scroll", null);
  }, []);
  return (
    <section className="section-hero">
      <div className="container flex h-100">
        <div className="section-content col-6">
          <h3 className="content sub-title">
            Optimal solution for it platform
          </h3>

          <h2 className="content title">We bring great Ideas to life</h2>
          <p className="intro">
            We provide the most responsive and functional IT design for
            companies and businesses worldwide.
          </p>
          <a href="/#" className="btn btn-read-more">
            Read More
          </a>
        </div>
        <div className="section-img col-6">
          <div className="circle">
            <img src={IMAGES.shape4} alt="circle" />
          </div>
          <div className="people">
            <img src={IMAGES.hero4} alt="person" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
