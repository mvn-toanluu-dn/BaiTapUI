import React from "react";
import { FaRegComments, FaUser } from "react-icons/fa";
import { IMAGES } from "../../../../assets/images";
function Blog() {
  const blogs = [
    {
      title: "Who Needs Extract Value From Data?",
      name: "Andrew Paker",
      comment: "0 Comments",
      day: "08",
      months: "Aug",
      user: FaUser,
      regcomt: FaRegComments,
      src: IMAGES.blog1,
    },
    {
      title: "Who Needs Extract Value From Data?",
      name: "Andrew Paker",
      comment: "0 Comments",
      day: "08",
      months: "Aug",
      user: FaUser,
      regcomt: FaRegComments,
      src: IMAGES.blog2,
    },
    {
      title: "Who Needs Extract Value From Data?",
      name: "Andrew Paker",
      comment: "0 Comments",
      day: "08",
      months: "Aug",
      user: FaUser,
      regcomt: FaRegComments,
      src: IMAGES.blog3,
    },
  ];
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
              {blogs.map((blog) => (
                <li className="blog-item col-4">
                  <div className="blog-single">
                    <div className="img-blog">
                      <img src={blog.src} alt="blog1"></img>
                    </div>
                    <div className="top-meta">
                      <p className="day">{blog.day}</p>
                      {blog.months}
                    </div>
                    <div className="blog-text">
                      <div className="blog-meta flex">
                        <div className="meta-item">
                          <i className="blog-icon">
                            <blog.user />
                          </i>
                          <a href="/#">{blog.name}</a>
                        </div>
                        <div className="meta-item">
                          <i className="blog-icon">
                            <blog.regcomt />
                          </i>
                          <span>{blog.comment}</span>
                        </div>
                      </div>
                      <div className="content-title">
                        <a href="/#">{blog.title}</a>
                      </div>
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

export default Blog;
