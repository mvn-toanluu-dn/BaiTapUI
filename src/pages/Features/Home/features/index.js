import React from "react";
import { IMAGES } from "../../../../assets/images";
function Features() {
  return (
    <section className="section-features">
      <div className="container">
        <div className="features">
          <ul className="flex features-list">
            <li className="features-list-item col-4 mr-30 flex">
              <div className="features-img col-4">
                <img src={IMAGES.icon4} alt="icon4" />
              </div>
              <h3 className="features-list-title col-8 ml-20">
                Faster and trusted grow solutions
              </h3>
            </li>
            <li className="features-list-item col-4 mr-30 flex">
              <div className="features-img col-4">
                <img src={IMAGES.icon10} alt="icon4" />
              </div>
              <h3 className="features-list-title col-8 ml-20">
                Strategy buildup for web software
              </h3>
            </li>
            <li className="features-list-item col-4 flex">
              <div className="features-img col-4">
                <img src={IMAGES.icon11} alt="icon4" />
              </div>
              <h3 className="features-list-title col-8 ml-20">
                Innovative core with possibilities.
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
