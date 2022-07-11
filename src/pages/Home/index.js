import { FaCheck, FaUser, FaRegComments } from "react-icons/fa";
import Slider from "react-slick";
import { IMAGES } from "../../assets/images/index";

export default function Home() {
  const settings = {
    infinite: true,
    // arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-arrow prev-arrow"></button>,
    nextArrow: <button className="slide-arrow next-arrow"></button>,
  };
  const settings_brand = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
  };
  return (
    <div className="page-home">
      <section className="section-hero">
        <div className="container">
          <div className="flex">
            <div className="section-content col-6">
              <h3 className="sub-title">OPTIMAL SOLUTION FOR IT PLATFORM</h3>
              <br />
              <h2 className="title">
                We bring great
                <br /> Ideas to life
              </h2>
              <p className="intro">
                We provide the most responsive and functional IT design for
                <br />
                companies and businesses worldwide.
              </p>
              <button className="btn">
                <a href="/#" className="read-more">
                  Read More
                </a>
              </button>
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
        </div>
      </section>
      <section className="section-features">
        <div className="container">
          <div className="features">
            <ul className="flex features-list">
              <div className="features-list-item col-4 mr-30 flex">
                <div className="features-img col-4">
                  <img src={IMAGES.icon4} alt="icon4" />
                </div>
                <h3 className="features-list-title col-8 ml-20">
                  Faster and trusted grow solutions
                </h3>
              </div>
              <div className="features-list-item col-4 mr-30 flex">
                <div className="features-img col-4">
                  <img src={IMAGES.icon10} alt="icon4" />
                </div>
                <h3 className="features-list-title col-8 ml-20">
                  Strategy buildup for web software
                </h3>
              </div>
              <div className="features-list-item col-4 flex">
                <div className="features-img col-4">
                  <img src={IMAGES.icon11} alt="icon4" />
                </div>
                <h3 className="features-list-title col-8 ml-20">
                  Innovative core with possibilities.
                </h3>
              </div>
            </ul>
          </div>
        </div>
      </section>
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
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote technology
                  </h3>
                  <p>
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible freelance
                    talent for all your software development needs.
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
      <section className="section-services section-padding">
        <div className="container">
          <div className="service">
            <div className="flex service-heading">
              <div className="service-text col-8">
                <div className="service-title">
                  <h2 className="section-title">
                    We run all kinds of{" "}
                    <span className="title-blue">IT services </span>that vow
                    your success
                  </h2>
                </div>
              </div>
              <div className="service-button col-4">
                <div className="features-services">
                  <button className="btn btn-service">All Services</button>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="container">
                <ul className="service-list flex">
                  <li className="service-item col-4">
                    <div className="service-item-box flex">
                      <div className="service-item-img">
                        <img src={IMAGES.feature6} alt="feature6" />
                      </div>
                      <div className="service-item-content1">
                        <h3 className="service-item-title">Analysis</h3>
                        <p className="service-item-text">
                          Accelerate innovation with world-class tech teams. Our
                          all service offerings to enhance
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
                        <h3 className="service-item-title">
                          Digital marketing
                        </h3>
                        <p className="service-item-text">
                          Accelerate innovation with world-class tech teams. Our
                          all service offerings to enhance
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="service-item col-4">
                    <div className="service-item-box flex">
                      <div className="service-item-img">
                        <img src={IMAGES.feature3} alt="feature6" />
                      </div>
                      <div className="service-item-content1">
                        <h3 className="service-item-title">Data Security</h3>
                        <p className="service-item-text">
                          Accelerate innovation with world-class tech teams. Our
                          all service offerings to enhance
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
                          Accelerate innovation with world-class tech teams. Our
                          all service offerings to enhance
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
                        <h3 className="service-item-title">
                          Seo & Optimization
                        </h3>
                        <p className="service-item-text">
                          Accelerate innovation with world-class tech teams. Our
                          all service offerings to enhance
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="service-item col-4">
                    <div className="service-item-box flex">
                      <div className="service-item-img">
                        <img src={IMAGES.feature8} alt="feature6" />
                      </div>
                      <div className="service-item-content1">
                        <h3 className="service-item-title">Email Marketing</h3>
                        <p className="service-item-text">
                          Accelerate innovation with world-class tech teams. Our
                          all service offerings to enhance
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="section-brand section-padding">
        <div className="container">
          <div className="brand">
            <h3 className="section-title">
              Step forward to become one of{" "}
              <span className="title-blue">49,494 </span>
              successful clients
            </h3>
            <div className="brand-img">
              <Slider className="img-slider brand-list" {...settings_brand}>
                <div className="brand-item">
                  <img className="brand-item" src={IMAGES.brand1} alt="brand" />
                </div>
                <div className="brand-item">
                  <img src={IMAGES.brand2} alt="brand" />
                </div>{" "}
                <div>
                  <img src={IMAGES.brand3} alt="brand" />
                </div>{" "}
                <div>
                  <img src={IMAGES.brand4} alt="brand" />
                </div>{" "}
                <div>
                  <img src={IMAGES.brand5} alt="brand" />
                </div>
                <div>
                  <img src={IMAGES.brand1} alt="brand" />
                </div>
                <div>
                  <img src={IMAGES.brand2} alt="brand" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="section-blog section-padding">
        <div className="container">
          <div className="blog">
            <div className="blog-title">
              <h3 className="section-sub-title">News & Blog</h3>
              <h2 className="section-title">Trending article & stories</h2>
            </div>
            <div className="blog-content">
              <ul className="blog-list flex">
                <li className="blog-item col-4">
                  <div className="blog-single">
                    <div className="img-blog">
                      <img src={IMAGES.blog1} alt="blog1"></img>
                    </div>
                    <div className="top-meta">
                      <p className="day">08</p>
                      Aug
                    </div>
                    <div className="blog-text">
                      <div className="blog-meta flex">
                        <div className="meta-item">
                          <i className="blog-icon">
                            <FaUser />
                          </i>
                          <a href="/#">Andrew Paker</a>
                        </div>
                        <div className="meta-item">
                          <i className="blog-icon">
                            <FaRegComments />
                          </i>
                          <span>0 Comments</span>
                        </div>
                      </div>
                      <div className="content-title">
                        <a href="/#">Who Needs Extract Value From Data?</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="blog-item col-4">
                  <div className="blog-single">
                    <div className="img-blog">
                      <img src={IMAGES.blog2} alt="blog1"></img>
                    </div>
                    <div className="top-meta">
                      <p className="day">08</p>
                      Aug
                    </div>
                    <div className="blog-text">
                      <div className="blog-meta flex">
                        <div className="meta-item">
                          <i className="blog-icon">
                            <FaUser />
                          </i>
                          <a href="/#">Andrew Paker</a>
                        </div>
                        <div className="meta-item">
                          <i className="blog-icon">
                            <FaRegComments />
                          </i>
                          <span>0 Comments</span>
                        </div>
                      </div>
                      <div className="content-title">
                        <a href="/#">Who Needs Extract Value From Data?</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="blog-item col-4">
                  <div className="blog-single">
                    <div className="img-blog">
                      <img src={IMAGES.blog3} alt="blog1"></img>
                    </div>
                    <div className="top-meta">
                      <p className="day">08</p>
                      Aug
                    </div>
                    <div className="blog-text">
                      <div className="blog-meta flex">
                        <div className="meta-item">
                          <i className="blog-icon">
                            <FaUser />
                          </i>
                          <a href="/#">Andrew Paker</a>
                        </div>
                        <div className="meta-item">
                          <i className="blog-icon">
                            <FaRegComments />
                          </i>
                          <span>0 Comments</span>
                        </div>
                      </div>
                      <div className="content-title">
                        <a href="/#">Who Needs Extract Value From Data?</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-form">
        <div className="container">
          <div className="form">
            <div className="form-content">
              <h2 className="section-title">Subscribe Newsletters</h2>
              <h4 className="section-sub-title">
                Enter your email address to register to our newsletter
              </h4>
            </div>
            <form className="form-sub">
              <input
                className="form-sub-input col-6"
                placeholder="Your Email"
              />
              <button className="btn btn-subscribe col-2">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
