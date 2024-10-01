import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ESSCounter from "../../components/ESSCounter";
import essIntroImg from "../../assets/images/ess_intro.png";
import { FaMapMarkedAlt, FaUserFriends } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { COMPANY_NAME } from "../../constants";

const ESSpage = () => {
  useEffect(() => {
    document.title = "Education Support Scheme | " + COMPANY_NAME;
  });
  return (
    <>
      <Header />
      <section className="inner_page">
        <Container>
          <Row className="d-flex align-items-stretch">
            <Col md={6}>
              <div className="content">
                <h3>Education Support Scheme</h3>
                <p>
                  The Education Support Scheme is a special initiative of the
                  Government of Khyber Pakhtunkhwa with the objective of
                  enrolling “out-of-school” children (OOSC) falling in the age
                  bracket of 4-16. The scheme is for the areas where government
                  is not providing schooling facility.
                </p>
              </div>
            </Col>
            <Col md={6} className="about-img">
              <img src={essIntroImg} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <ESSCounter />
      <section id="criteria" className="criteria section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Establishment Criteria</h2>
            <p>
              For establishment of Education Support Scheme School the criteria
              are:
            </p>
          </div>
          <div className="row">
            <div
              className="col-md-6 d-flex align-items-stretch criteria_row"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <FaMapMarkedAlt className="faIcon" />
                <h4>Distance Measurement</h4>
                <p>
                  Government is not providing schooling facility in a radius of
                  2km in plain area and 1km in hilly area.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <FaGraduationCap className="faIcon" />
                <h4>Private School</h4>
                <p>
                  Village should have at least one private school registered
                  with PSRA.
                </p>
                <br />
              </div>
            </div>
            <div
              className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <FaHome className="faIcon" />
                <h4>Distance between Private and Government School</h4>
                <p>
                  Private School(s) are at minimum distance of 1.5km from
                  government school for plain area and 0.75km for hilly
                  area(level and gender based).
                </p>
              </div>
            </div>
            <div
              className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <FaUserFriends className="faIcon" />
                <h4>Students</h4>
                <p>Out of School Children are available.</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ESSpage;
