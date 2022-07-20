import React from "react";
import { IMAGES } from "../../../../assets/images";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
function Testimonial() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <MdKeyboardArrowLeft className="slide-arrow prev-arrow" />,
    nextArrow: <MdKeyboardArrowRight className="slide-arrow next-arrow" />,
  };
  return (
    <section className="section-testimonial">
      <div className="container">
        <div className="testimonial">
          <div className="flex testimonial">
            <div className="testimonial-img col-6">
              <div className="testimonial-img-item">
                <img src={IMAGES.testi5} alt="testi5" />
              </div>
            </div>
            <div className="testimonial-text col-6">
              <div className="testimonial-content">
                <h2 className="section-title">
                  Clients <span className="title-blue">Testimonial</span>
                </h2>
                <Slider className="slider" {...settings}>
                  <div className="slider-content">
                    <img src={IMAGES.quote2} alt="quote2" />
                    <p className="slider-text">
                      Accelerate innovation with world-class tech teams Beyond
                      more stoic this along goodness hey this this wow manatee
                      analyses of famous case studies{" "}
                    </p>
                    <div className="author-text">
                      <h5 className="name">Mike Holder</h5>
                      <span className="designation">CEO, Harlond inc</span>
                    </div>
                  </div>
                  <div className="slider-content">
                    <img src={IMAGES.quote2} alt="quote2" />
                    <p className="slider-text">
                      Accelerate innovation with world-class tech teams Beyond
                      more stoic this along goodness hey this this wow manatee
                      analyses of famous case studies{" "}
                    </p>
                    <div className="author-text">
                      <h5 className="name">Mike Holder</h5>
                      <span className="designation">CEO, Harlond inc</span>
                    </div>
                  </div>
                  <div className="slider-content">
                    <img src={IMAGES.quote2} alt="quote2" />
                    <p className="slider-text">
                      Accelerate innovation with world-class tech teams Beyond
                      more stoic this along goodness hey this this wow manatee
                      analyses of famous case studies{" "}
                    </p>
                    <div className="author-text">
                      <h5 className="name">Mike Holder</h5>
                      <span className="designation">CEO, Harlond inc</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
