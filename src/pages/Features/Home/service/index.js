import React from "react";
import { IMAGES } from "../../../../assets/images";
function Services() {
  const services = [
    {
      src: IMAGES.feature6,
      title: "Analysis",
      text: "Accelerate innovation with world-class tech teams. Our all service offerings to enhance",
    },
    {
      src: IMAGES.feature1,
      title: "Digital marketing",
      text: "Accelerate innovation with world-class tech teams. Our all service offerings to enhance",
    },
    {
      src: IMAGES.feature3,
      title: "Data Security",
      text: "Accelerate innovation with world-class tech teams. Our all service offerings to enhance",
    },
    {
      src: IMAGES.feature2,
      title: "Innovation",
      text: "Accelerate innovation with world-class tech teams. Our all service offerings to enhance",
    },
    {
      src: IMAGES.feature7,
      title: "Seo & Optimization",
      text: "Accelerate innovation with world-class tech teams. Our all service offerings to enhance",
    },
    {
      src: IMAGES.feature8,
      title: "Email Marketing",
      text: "Accelerate innovation with world-class tech teams. Our all service offerings to enhance",
    },
  ];
  return (
    <section className="section-services section-padding">
      <div className="container">
        <div className="service">
          <div className="flex service-heading">
            <div className="service-text col-8">
              <div className="service-title">
                <h2 className="section-title">
                  We run all kinds of{" "}
                  <span className="title-blue">IT services </span>that vow your
                  success
                </h2>
              </div>
            </div>
            <div className="service-button flex col-4">
              <a href="/#" className="btn btn-service flex">
                All Services
              </a>
            </div>
          </div>
          <div className="service-content">
            <ul className="service-list flex">
              {services.map((service) => (
                <li className="service-item col-4">
                  <div className="service-item-box flex">
                    <div className="service-item-img">
                      <img src={service.src} alt="feature6" />
                    </div>
                    <div className="service-item-content1">
                      <h3 className="service-item-title">{service.title}</h3>
                      <p className="service-item-text">{service.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
