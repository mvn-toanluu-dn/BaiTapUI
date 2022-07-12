import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RiMailOpenLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IMAGES } from "../../../assets/images/index";
export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <ul className="footer-top-list flex">
              <li className="footer-top-item col-3">
                <div className="logo">
                  <img src={IMAGES.logowhite} alt="logo" />
                </div>
                <ul className="info pt-20">
                  <li>
                    <FiPhoneCall className="info-icon mr-10 mt-2" />{" "}
                    <span className="info-item">+91 458 654 528</span>
                  </li>
                  <li className="info mt-10">
                    <RiMailOpenLine className="info-icon mr-10 mt-2" />
                    <span className="info-item">info@example.com</span>
                  </li>
                  <li className="info mt-10">
                    <IoLocationOutline className="info-icon mr-10 mt-2" />
                    <span className="info-item">60 East 65th Street, NY</span>
                  </li>
                </ul>
              </li>
              <li className="footer-top-item col-3">
                <h4 className="section-title">Useful Links</h4>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="/#">Terms & Conditions</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">About Company</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">Payment Gatway</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">Policy</a>
                  </li>
                </ul>
              </li>
              <li className="footer-top-item col-3">
                <h4 className="section-title">Our Services</h4>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="/#">Data Security</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">IT Managment</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">Outsourcing</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">Networking</a>
                  </li>
                </ul>
              </li>
              <li className="footer-top-item col-3">
                <h4 className="section-title">Support</h4>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="/#">Documentation</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">Support</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">FAQS</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#">Download</a>
                  </li>
                </ul>
              </li>
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
                <div className="footer-img mr-10">
                  <FaFacebookF className="icon" />
                </div>
                <div className="footer-img mr-10">
                  <FaTwitter className="icon" />
                </div>
                <div className="footer-img mr-10">
                  <FaLinkedinIn className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
