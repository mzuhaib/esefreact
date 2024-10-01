import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import nsiIntroImg from "../../assets/images/nsi.png";
import NSICounter from "../../components/NSICounter";
import { FaRegBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { COMPANY_NAME } from "../../constants";

const NSIpage = () => {
  useEffect(() => {
    document.title = "New Schools Initiative | " + COMPANY_NAME;
  });
  return (
    <>
      <Header />
      <section className="inner_page">
        <Container>
          <Row className="d-flex align-items-stretch">
            <Col md={6}>
              <div className="content">
                <h3>New Schools Inititative</h3>
                <p>
                  The program focuses on children of the areas where they do not
                  have easy access to education facilities. The concept is cost
                  effective, comparing to existing per student cost in the
                  formal public education system. Moreover, under this scheme,
                  schooling facility can be provided in less time as compared to
                  the time required for the establishment of new formal school.
                  The scheme is for the areas where government is not providing
                  schooling facility.
                </p>
                <h4>
                  The Objectives of New Schools Initiative are as follows:
                </h4>
                <ul>
                  <li>To enroll 10,000 (10 Thousand only) children.</li>
                  <li>
                    To support the private Entrepreneurs to provide access to
                    quality education in the areas where public and private
                    schools do not exist.
                  </li>
                  <li>To strengthen the private education sector.</li>
                  <li>
                    To create employment opportunities for educated youth.
                  </li>
                  <li>
                    To support the parents by providing tution fee, textbooks,
                    shoes and uniform.
                  </li>
                  <li>
                    To support the GoKP in achieving the SDGs by providing free
                    and compulsory education.
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="about-img">
              <img src={nsiIntroImg} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <NSICounter />
      <section id="features" class="features">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Criteria for School Infrastructure</h2>
            <h2>Primary School Criteria</h2>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaRegBuilding className="faIcon" />
                <h3>a) School must have 6 rooms.</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaUsers className="faIcon" />
                <h3>
                  b) Rooms are furnished with furniture, doors and windows.
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaUsers className="faIcon" />
                <h3>c) Electricity and drinking facility is provided.</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaMapPin className="faIcon" />
                <h3>
                  d) Computer with accessories and internet facility are
                  available.
                </h3>
              </div>
            </div>
          </div>
          <div class="row" data-aos="zoom-in mt-4">
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaUserCheck className="faIcon" />
                <h3>e) Washrooms</h3>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaFileSignature className="faIcon" />
                <h3>f) Atleast 5 teachers</h3>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaEye className="faIcon" />
                <h3>g) Security clearance from local police station.</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Middle School Criteria</h2>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaRegBuilding className="faIcon" />
                <h3>a) School must have 3 rooms for middle section classes.</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaUsers className="faIcon" />
                <h3>
                  b) Rooms are furnished with furniture, doors and windows.
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaUserFriends className="faIcon" />
                <h3>c) Electricity and drinking facility is provided.</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaMapMarkedAlt className="faIcon" />
                <h3>
                  d) Computer with accessories and internet facility are
                  available.
                </h3>
              </div>
            </div>
          </div>
          <div class="row" data-aos="zoom-in mt-4">
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaCheckSquare className="faIcon" />
                <h3>e) Washrooms</h3>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaFileSignature className="faIcon" />
                <h3>f) Atleast 4 teachers covering all major subjects.</h3>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaEye className="faIcon" />
                <h3>g) Security clearance from local police station.</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>High School Criteria</h2>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaRegBuilding className="faIcon" />
                <h3>a) School must have 3 rooms for high section classes.</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaUsers className="faIcon" />
                <h3>
                  b) Rooms are furnished with furniture, doors and windows.
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaUserFriends className="faIcon" />
                <h3>c) Electricity and drinking facility is provided.</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="icon-box text-center">
                <FaMapMarkedAlt className="faIcon" />
                <h3>
                  d) Computer, Internet, Library, Science Lab & Computer Lab are
                  available.
                </h3>
              </div>
            </div>
          </div>
          <div class="row" data-aos="zoom-in mt-4">
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaCheckSquare className="faIcon" />
                <h3>e) Washrooms</h3>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaFileSignature className="faIcon" />
                <h3>
                  f) Atleast 5 teachers covering all science subjects, English &
                  others
                </h3>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="icon-box text-center">
                <FaEye className="faIcon" />
                <h3>g) Security clearance from local police station.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NSIpage;
