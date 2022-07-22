import React from "react";
import { IMAGES } from "../../../../assets/images";
function Features() {
  const features = [
    {
      title: "Faster and trusted grow solutions",
      src: IMAGES.icon4,
    },
    {
      title: "Strategy buildup for web software",
      src: IMAGES.icon10,
    },
    {
      title: "Innovative core with possibilities.",
      src: IMAGES.icon11,
    },
  ];
  return (
    <section className="section-features">
      <div className="container">
        <div className="features">
          <ul className="flex features-list">
            {features.map((feature) => (
              <li className="features-list-item col-4 mr-30 flex">
                <div className="features-img col-4">
                  <img src={feature.src} alt="icon4" />
                </div>
                <h3 className="features-list-title col-8 ml-20">
                  {feature.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
