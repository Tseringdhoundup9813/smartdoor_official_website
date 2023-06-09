//import css
import "../style/Contact.css";
//navbar
import Navbar from "../components/Navbar";
//footer
import Footer from "../components/Footer";
//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  useEffect(() => {
    AOS.init();

    if (message) {
      setTimeout(function () {
        set_message(false);
      }, 5000);
    }
  });

  const [contact, set_contact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [message, set_message] = useState();

  async function SumitContact(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://node.smartdoors.com.np/contact",
        contact
      );
      console.log(response.data.success);
      set_message(response.data.success);
      let allvalue = document.querySelectorAll(".contact-input");

      allvalue.forEach((element) => {
        console.log(element.value);
        element.value = "";
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar></Navbar>

      {/* message sucess submit ================================================= */}

      {
        <div
          style={{ transform: `translateX(${message ? "0%" : "-100%"})` }}
          className="submit_message"
        >
          <p>Thank you for contact we will response soon.....</p>
        </div>
      }

      {/* end =================================END=============================== */}
      <div id="contact">
        <div className="row contact-map container-fluid">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.626763655633!2d85.32460421476105!3d27.759655882770268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1fe0ae5e987d%3A0x1ede3e5742df2552!2sSmart%20Doors!5e0!3m2!1sen!2snp!4v1679046090202!5m2!1sen!2snp"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row row-form">
          <div
            className="col-xsm-12 col-sm-5 contact-detail"
            data-aos="fade-right"
          >
            <div className="contact-title text-uppercase">
              get <span className="contact-title-blue"> in touch</span>
            </div>
            <div className="contact-para">
              Thank you for visiting our website. We would like to hear from you
              if you have any questions about our versatile range of products
              and services, or if you feel there is anything we could add to our
              web page to help you in future. If you have any questions relating
              to training, customer support or refresher courses, please let us
              know as we will be pleased to assist.
            </div>
            <div className="contact-company-detail">
              <div className="contact-c-name">Smart Doors Pvt.Ltd</div>
              <div className="contact-c-location d-flex ">
                {" "}
                <div className="contact-c-loca-icon">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                </div>
                <div className="contact-c-loca">
                  Bhootkhel, Tokha, Nepal 44600
                </div>
              </div>
              <div className="contact-c-phone d-flex">
                {" "}
                <div className="contact-c-pho-icon">
                  <i class="fa-solid fa-phone"></i>
                </div>{" "}
                <div className="contact-c-pho">+977 9812345678</div>
              </div>
              <div className="contact-c-mail d-flex">
                <div className="contact-c-ma-icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>{" "}
                <div className="contact-c-ma"> admin@smartdoors.com.np</div>
              </div>
            </div>
          </div>
          <div className="col-xsm-12 col-sm-6 contact-form">
            <div className="contact-form-head"> quick contact</div>
            <form action="#" onSubmit={SumitContact}>
              <div>
                <label for="name" className="contact-form-label">
                  your name <span className="contact-form-req">(Required)</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="contact-input"
                  name="contact"
                  onChange={(e) =>
                    set_contact({ ...contact, name: e.target.value })
                  }
                  id="fname"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label for="email" className="contact-form-label">
                  your email{" "}
                  <span className="contact-form-req">(Required)</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  className="contact-input"
                  name="contact"
                  onChange={(e) =>
                    set_contact({ ...contact, email: e.target.value })
                  }
                  id="fname"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label for="number" className="contact-form-label">
                  your phone number{" "}
                  <span className="contact-form-req">(Required)</span>
                </label>{" "}
                <br />
                <input
                  type="number"
                  className="contact-input"
                  name="contact"
                  onChange={(e) =>
                    set_contact({ ...contact, phone: e.target.value })
                  }
                  id="fname"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label for="message" className="contact-form-label">
                  your message{" "}
                  <span className="contact-form-req">(Optional)</span>
                </label>{" "}
                <br />
                <textarea
                  name="contact"
                  className="contact-input"
                  id="message-textarea"
                  onChange={(e) =>
                    set_contact({ ...contact, message: e.target.value })
                  }
                  placeholder="Message..."
                  required
                ></textarea>
              </div>

              <div className="contact-submit-btn">
                {/* <span className="btn btn-submit">submit</span> */}
                <button className="btn btn-submit">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Contact;
