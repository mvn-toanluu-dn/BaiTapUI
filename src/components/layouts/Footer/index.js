import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RiMailOpenLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IMAGES } from "../../../assets/images/index";
export default function Footer() {
  const items = [
    {
      title: "Useful Links",
      item1: "Terms & Conditions",
      item2: "About Company",
      item3: "Payment Gatway",
      item4: "Policy",
    },
    {
      title: "Our Services",
      item1: "Data Security",
      item2: "IT Managment",
      item3: "Outsourcing",
      item4: "Networking",
    },
    {
      title: "Support",
      item1: "Documentation",
      item2: "Support",
      item3: "FAQS",
      item4: "Download",
    },
  ];
  const icons = [
    {
      src: FaFacebookF,
    },
    {
      src: FaTwitter,
    },
    {
      src: FaLinkedinIn,
    },
  ];
  return (
    <footer className="page-footer">
      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <ul className="footer-top-list flex">
              <li className="footer-top-item col-3">
                <a href="/#" className="footer-logo">
                  <img src={IMAGES.logowhite} alt="logo" />
                </a>
                <ul className="info pt-20">
                  <li className="info mt-10">
                    <FiPhoneCall className="info-icon mr-10 mt-2" />
                    <a href="/#" className="info-item">
                      +91 458 654 528
                    </a>
                  </li>
                  <li className="info mt-10">
                    <RiMailOpenLine className="info-icon mr-10 mt-2" />
                    <a href="/#" className="info-item">
                      info@example.com
                    </a>
                  </li>
                  <li className="info mt-10">
                    <IoLocationOutline className="info-icon mr-10 mt-2" />
                    <span className="info-item">60 East 65th Street, NY</span>
                  </li>
                </ul>
              </li>
              {items.map((item) => (
                <li className="footer-top-item col-3">
                  <h4 className="section-title">{item.title}</h4>
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="/#">{item.item1}</a>
                    </li>
                    <li className="footer-item">
                      <a href="/#">{item.item2}</a>
                    </li>
                    <li className="footer-item">
                      <a href="/#">{item.item3}</a>
                    </li>
                    <li className="footer-item">
                      <a href="/#">{item.item4}</a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-list flex">
              <div className="footer-list-left">
                <p>© Copyrights 2022 Techmax All rights reserved.</p>
              </div>
              <div className="footer-list-right flex">
                {icons.map((icon) => (
                  <a href="/#" className="footer-img mr-10">
                    <icon.src className="icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
