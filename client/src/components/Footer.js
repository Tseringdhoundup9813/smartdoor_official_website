//home css
import "../style/Footer.css";
import { NavLink } from "react-router-dom";

import { ScrollRestoration } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row-footer row">
          <ScrollRestoration></ScrollRestoration>
          <div className="col-sm-3 col-6">
            <div className="footer-title text-capitalize">About Us</div>
            <div className="footer-about-us">
              Smart Doors is an emerging door production Company located in
              Tokha -3 road kathmandu. We provide our consumers with products of
              the highest caliber and with top rated customer service. We have
              been dedicated to giving our clients super excellent.
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="footer-title">company</div>

            <div className="footer-ul">
              <li>
                <NavLink to="/about/our-vision" className="nav-link">
                  Vision
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="footer-title">Get help</div>
            <div className="footer-ul">
              {/* <li>
                <NavLink to="/faqs" className="nav-link">
                  FAQs
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </div>
          </div>
          <div className="col-sm-3 col-6 footer-nav-social">
            <div className="footer-title">Connect us</div>
            <div className="footer-social d-flex ">
              <div className="footer-fb">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100088178495286"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="footer-linkedin">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.linkedin.com/in/smart-doors-2aa51726a/"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <li>Bhootkhel, Tokha, Nepal 44600</li>
            <li>+977 9812345678</li>
            <li>admin@smartdoors.com.np</li>
          </div>
        </div>

        <div className="row row-copy">
          <div className="col-12 footer-copy my-2 d-flex align-items-center justify-content-center flex-column">
            <div className="copyright">
              &copy; 2023 Smart Doors. All Rights Reseved.
            </div>
            <div className="footer-terms d-flex">
              <div className="f-terms">terms of Service</div>
              <div className="f-privacy">Privacy Policy</div>
              <div className="f-acc">Accessibility Statement</div>
              <div className="f-cho">Your Privacy Choices</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
