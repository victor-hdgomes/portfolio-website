import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:victor.hgomes2002@gmail.com" data-cursor="disable">
                victor.hgomes2002@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Brazil · Remote</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/victor-hdgomes"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-hdgomes/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Developed by <span>Victor Hugo</span>
              <br /> Design by{" "}
              <a
                href="https://www.moncy.dev"
                target="_blank"
                data-cursor="disable"
              >
                Moncy Yohannan
              </a>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
