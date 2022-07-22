import React from "react";
import Slider from "react-slick";
import { IMAGES } from "../../../../assets/images";
function Brand() {
  const settings_brand = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };
  const brands = [
    {
      src: IMAGES.brand1,
    },
    {
      src: IMAGES.brand2,
    },
    {
      src: IMAGES.brand3,
    },
    {
      src: IMAGES.brand4,
    },
    {
      src: IMAGES.brand5,
    },
    {
      src: IMAGES.brand2,
    },
  ];
  return (
    <section className="section-brand section-padding">
      <div className="container">
        <div className="brand">
          <h3 className="section-title">
            Step forward to become one of{" "}
            <span className="title-blue">49,494 </span>
            successful clients
          </h3>
          <div className="brand-img">
            <Slider className="img-slider brand-list flex" {...settings_brand}>
              {brands.map((brand) => (
                <div className="brand-item">
                  <img className="brand-item" src={brand.src} alt="brand" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
