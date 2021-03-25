import React from "react";
import "../Styles/footerStyle.css";

import Resume from "../ProjectFiles/ResumeV3.pdf";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="resume text-center">
          <div className="container">
            <div className="row justify-content-center title">
              <h1>Contact Me</h1>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <h1>Socials</h1>
                <div className="row">
                  <a href="https://github.com/machadop1407">
                    <div className="col-md-2">
                      <li className="fa fa-github"></li>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/pedro-machado-7606871aa/">
                    <div className="col-md-2">
                      <li className="fa fa-linkedin"></li>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UC8S4rDRZn6Z_StJ-hh7ph8g">
                    <div className="col-md-2">
                      <li className="fa fa-youtube"></li>
                    </div>
                  </a>
                  <a href="mailto:machadop1407@gmail.com?" subject="Portfolio">
                    <div className="col-md-2">
                      <li className="fa fa-envelope"></li>
                    </div>
                  </a>
                </div>

                <div className="row resume">
                  <h1>
                    {" "}
                    My Resume:{" "}
                    <a href={Resume} download="PedroMachado.pdf">
                      <li className="fa fa-address-book-o">
                        <span className="tooltiptext">Download Resume</span>
                      </li>
                    </a>
                  </h1>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row more-info">
                  <p>machadop1407@gmail.com</p>
                  <p> Vancouver, British Columbia / Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
