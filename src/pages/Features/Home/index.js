import { useEffect, useRef, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import About from "./about/index";
import Banner from "./banner/index";
import Blog from "./blog/index";
import Brand from "./brand/index";
import Features from "./features/index";
import Hero from "./hero/index";
import Service from "./service/index";
import Testimonial from "./testimonial/index";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTo = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.scrollingElement.scrollTop >= 80 ||
        document.body.scrollTop >= 80
      ) {
        scrollTo.current.classList.add("active");
      } else {
        scrollTo.current.classList.remove("active", null);
      }
    });
    return () => window.removeEventListener("scroll", null);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset >= 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="page-home">
        <Hero />
        <Features />
        <About />
        <Service />
        <Banner />
        <Testimonial />
        <Brand />
        <Blog />
      </div>
      {isVisible && (
        <div className="scroll flex" onClick={scrollToTop} ref={scrollTo}>
          <HiOutlineArrowUp />
        </div>
      )}
    </>
  );
}
