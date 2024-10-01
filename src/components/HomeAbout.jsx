import React from "react";
import img_src from "../assets/images/gcs_intro.jpeg";

const HomeAbout = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <div
            className="content col-xl-6 d-flex align-items-stretch flex-column justify-content-center aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="content">
              <h3>Who are we?</h3>
              <p>
                Elementary &amp; Secondary Education Foundation Govt. of Khyber
                Pakhtunkhwa (ESEF) is an autonomous body established under
                “Khyber Pakhtunkhwa Elementary &amp; Secondary Education
                Foundation Ordinance No. XXX of 2002”.
              </p>
              <a href="about.html" className="about-btn">
                About us <i className="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
          <div
            className="content col-xl-6 d-flex align-items-stretch flex-column justify-content-center aos-init aos-animate"
            data-aos="fade-up"
          >
            <img src={img_src} height="100%" width="100%" />
            <div
              className="col-xl-6 icon-box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
