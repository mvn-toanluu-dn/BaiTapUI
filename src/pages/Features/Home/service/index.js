import React from "react";
import { IMAGES } from "../../../../assets/images";
function Services() {
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
              <li className="service-item col-4">
                <div className="service-item-box flex">
                  <div className="service-item-img">
                    <img src={IMAGES.feature6} alt="feature6" />
                  </div>
                  <div className="service-item-content1">
                    <h3 className="service-item-title">Analysis</h3>
                    <p className="service-item-text">
                      Accelerate innovation with world-class tech teams. Our all
                      service offerings to enhance
                    </p>
                  </div>
                </div>
              </li>
              <li className="service-item col-4">
                <div className="service-item-box flex">
                  <div className="service-item-img">
                    <img src={IMAGES.feature1} alt="feature6" />
                  </div>
                  <div className="service-item-content1">
                    <h3 className="service-item-title">Digital marketing</h3>
                    <p className="service-item-text">
                      Accelerate innovation with world-class tech teams. Our all
                      service offerings to enhance
                    </p>
                  </div>
                </div>
              </li>
              <li className="service-item col-4 pr-0">
                <div className="service-item-box flex">
                  <div className="service-item-img">
                    <img src={IMAGES.feature3} alt="feature6" />
                  </div>
                  <div className="service-item-content1">
                    <h3 className="service-item-title">Data Security</h3>
                    <p className="service-item-text">
                      Accelerate innovation with world-class tech teams. Our all
                      service offerings to enhance
                    </p>
                  </div>
                </div>
              </li>
              <li className="service-item col-4">
                <div className="service-item-box flex">
                  <div className="service-item-img">
                    <img src={IMAGES.feature2} alt="feature6" />
                  </div>
                  <div className="service-item-content1">
                    <h3 className="service-item-title">Innovation</h3>
                    <p className="service-item-text">
                      Accelerate innovation with world-class tech teams. Our all
                      service offerings to enhance
                    </p>
                  </div>
                </div>
              </li>
              <li className="service-item col-4">
                <div className="service-item-box flex">
                  <div className="service-item-img">
                    <img src={IMAGES.feature7} alt="feature6" />
                  </div>
                  <div className="service-item-content1">
                    <h3 className="service-item-title">Seo & Optimization</h3>
                    <p className="service-item-text">
                      Accelerate innovation with world-class tech teams. Our all
                      service offerings to enhance
                    </p>
                  </div>
                </div>
              </li>
              <li className="service-item col-4 pr-0">
                <div className="service-item-box flex">
                  <div className="service-item-img">
                    <img src={IMAGES.feature8} alt="feature6" />
                  </div>
                  <div className="service-item-content1">
                    <h3 className="service-item-title">Email Marketing</h3>
                    <p className="service-item-text">
                      Accelerate innovation with world-class tech teams. Our all
                      service offerings to enhance
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
