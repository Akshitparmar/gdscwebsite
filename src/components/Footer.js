import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";
import logo from "../assets/Images/logotrans.svg";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start text-white">
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <img className="footerimage" src={logo} />
                <h6 className="text-uppercase mb-4 font-weight-bold">GDSC</h6>
                <p>Google Developer student clubs Ghaziabad </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                
                <p>
                  <a className="text-white" href="/Home">
                    Home
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/About">
                    About Us
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/team">
                    Team
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/Contact">
                    Contact
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                
                <p>
                  <a className="text-white" href="/events">
                    Events
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/gallery">
                    Gallery
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/Terms">
                    Terms
                  </a>
                </p>
                <p>
                  <a className="text-white" href="/Privacy">
                    Privacy
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> GDSC SRM Ghaziabad
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  dscsrmncr@gmail.com
                </p>
                {/* <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p> */}
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">SOCIAL LINKS</div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ISTESRMNCR/"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/gdscsrm?igshid=NDk5N2NlZjQ="
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/gdsc-srm-ghaziabad/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1 text-light"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.com/invite/ZrcJ5Qv"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;