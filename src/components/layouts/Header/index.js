import { IMAGES } from "../../../assets/images/index";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { useEffect, useRef } from "react";
export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.scrollingElement.scrollTop > 80 ||
        document.body.scrollTop > 80
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
        <div className="header">
          <div className="header-list">
            <div className="logo">
              <img src={IMAGES.logo} alt="logo" />
            </div>
            <nav className="header-nav">
              <ul className="header-list">
                <li className="item-menu home">Home</li>
                <li className="item-menu">Aboute Us</li>
                <li className="item-menu">Pages</li>
                <li className="item-menu">Blog</li>
                <li className="item-menu">Contact</li>
              </ul>
            </nav>
            <div className="header-right">
              <div className="item-icon search">
                <i className="search" href="/">
                  <FiSearch />
                </i>
              </div>
              <div className="item-icon">
                <i className="" href="/#">
                  <BsCart2 />
                </i>
              </div>
              <button className="btn get-start">Lets's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}