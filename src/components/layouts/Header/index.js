import { IMAGES } from "../../../assets/images/index";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2, BsChevronDown } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from "react";
export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.scrollingElement.scrollTop >= 80 ||
        document.body.scrollTop >= 80
      ) {
        headerRef.current.classList.add("shink");
      } else {
        headerRef.current.classList.remove("shink", null);
      }
    });
    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <header className="page-header" ref={headerRef}>
      <div className="container">
        <div className="header flex">
          <a href="/#" className="header-logo col-2">
            <img src={IMAGES.logo} alt="logo" />
          </a>
          <nav className="header-menu flex col-7">
            <ul className="header-list-item flex mr-10">
              <li className="item-menu home">
                <a href="/#"> Home</a>
                <span className="icon-down-menu">
                  <BsChevronDown />
                </span>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      home one
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      home two
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      home three
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      home four
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      home five
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      home six
                    </a>
                  </li>
                </ul>
              </li>
              <li className="item-menu">
                <a href="/#">Aboute Us</a>
              </li>
              <li className="item-menu">
                <a href="/#">Pages</a>
                <span className="icon-down-menu">
                  <BsChevronDown />
                </span>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      our team
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      service
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      why choose us
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      testimonial
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      pricing
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      login & register
                    </a>
                  </li>
                </ul>
              </li>
              <li className="item-menu">
                <a href="/#">Blog</a>
                <span className="icon-down-menu">
                  <BsChevronDown />
                </span>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      blog grid
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      latest news
                    </a>
                  </li>
                  <li className="sub-item">
                    <a className="sub-item-link" href="/#">
                      blog details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="item-menu">
                <a href="/#">Contact</a>
              </li>
            </ul>
          </nav>
          <ul className="header-action flex ml-15 col-3">
            <li className="item-icon search">
              <i className="icons search" href="/">
                <IoSearchOutline />
              </i>
            </li>
            <li className="item-icon cart">
              <i className="icons cart ml-5" href="/#">
                <BsCart2 />
              </i>
              <span className="count">0</span>
            </li>
            <li>
              <a href="/#" className="btn get-start">
                Lets's Talk
              </a>
            </li>
          </ul>
          <div className="header-hidden-menu">
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
}
