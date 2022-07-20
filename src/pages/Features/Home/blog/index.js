import React from "react";
import { FaRegComments, FaUser } from "react-icons/fa";
import { IMAGES } from "../../../../assets/images";
function Blog() {
  return (
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
  );
}

export default Blog;
