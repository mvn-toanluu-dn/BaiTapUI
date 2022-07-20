import React from "react";
function Banner() {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="banner flex">
          <h2 className="section-title">Make a great project with us</h2>
          <h3 className="section-sub-title">
            To make requests for further information,{" "}
            <a href="/#" className="sub-title-color">
              Contact US
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Banner;
