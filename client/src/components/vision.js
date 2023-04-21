//css
import "../style/vision.css";
//navbar
import Navbar from "../components/Navbar";
//footer
import Footer from "../components/Footer";
function Vision() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="row row-vision">
        <div className="col-12 vision-container">
          <div className="vision-head">Our vision</div>
          <div className="row vision-subhead">
            <div className="vision-detail col-8 align-items-center justify-content-center">
              <div className="vision-pro-say vision-line-height">
                " Quality product "
              </div>
            </div>
            <div className="vision-img col-2"></div>
            <div className="col-12 vision-subtitle vision-line-height">
              Our mission at Doors Manufacturing Company of Nepal is to provide
              high-quality, durable and stylish doors to our customers. We
              strive to create an exceptional customer experience by focusing on
              innovation, craftsmanship, and customer satisfaction. We are
              committed to providing doors that not only enhance the aesthetics
              of a space but also improve its functionality and security. To
              achieve our mission, we aim to:
            </div>
            <div className="col-12 vision-para">
              <ol type="number">
                <li>
                  Use state-of-the-art technology and machinery to manufacture
                  doors that are durable and long-lasting.
                </li>
                <li>
                  Continuously innovate our products and manufacturing processes
                  to keep up with changing customer needs and preferences.
                </li>
                <li>
                  Hire and retain skilled and dedicated professionals who are
                  passionate about their work and committed to delivering
                  excellence.
                </li>
                <li>
                  Foster a culture of continuous learning, growth, and
                  improvement among our employees.
                </li>
                <li>
                  Prioritize customer satisfaction by offering customized
                  solutions and prompt after-sales service.
                </li>
                <li>
                  Conduct business with integrity, transparency, and respect for
                  our customers, employees, suppliers, and the environment.
                  Contribute to the economic development of Nepal by creating
                  job opportunities, supporting local businesses, and promoting
                  sustainable practices.
                </li>
              </ol>
            </div>
            <div className="vision-para vision-line-height">
              In the future, our doors manufacturing company will be recognized
              as a global leader in the industry, known for our innovative
              products, exceptional quality, and outstanding customer service.
              We will continue to push the boundaries of technology and design,
              creating doors that are not only functional but also beautiful and
              sustainable. Our commitment to sustainability will be at the
              forefront of our operations, with all of our products made using
              eco-friendly materials and processes. Our doors will be found in
              some of the world's most prestigious buildings, from residential
              homes to commercial skyscrapers. We will work closely with
              architects and designers to create customized solutions that meet
              their unique needs, ensuring that our doors are not only
              aesthetically pleasing but also practical and safe. Our team will
              be made up of the best and brightest minds in the industry, with a
              shared passion for excellence and a commitment to continuous
              improvement. We will invest heavily in our employees, providing
              them with the training, resources, and support they need to thrive
              in their roles and contribute to the company's success. At the
              heart of everything we do will be a dedication to our customers.
              We will listen to their feedback and constantly seek ways to
              improve our products and services, ensuring that they always
              receive the best possible experience when working with us. Through
              our unwavering commitment to quality, sustainability, innovation,
              and customer service, we will become the go-to doors manufacturing
              company for customers around the world.
            </div>
            <div className="col-6 vision-info">
              <div className="vision-name text-capitalize">
                Dipendra agrawal
              </div>
              <div className="vision-address text-capitalize">
                founder, smart doors
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Vision;
