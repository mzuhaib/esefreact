import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GCSCounter from "../../components/GCSCounter";
import gcsIntroImg from "../../assets/images/gcs_intro.jpeg";
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

const GCSpage = () => {
  useEffect(() => {
    document.title = "Girls Community Schools | " + COMPANY_NAME;
  });
  return (
    <>
      <Header />
      <section className="inner_page">
        <Container>
          <Row className="d-flex align-items-stretch">
            <Col md={6}>
              <div className="content">
                <h3>About Us</h3>
                <p>
                  The Elementary & Secondary Education Foundation establishes
                  Girls Community Schools to serve “out-of-schools” children
                  belonging to families lacking access to educational
                  opportunities. These schools are established in those areas
                  where government is not providing schooling facility. Girls
                  Community Schools are located in a room donated by community
                  members. A teacher from community teaches and Village
                  Education Committee manages the schools activities. They
                  follow the primary school curriculum, and the government
                  provides free textbooks and teaching resources, and pays
                  teachers honorarium.
                </p>
              </div>
            </Col>
            <Col md={6} className="about-img">
              <img src={gcsIntroImg} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <GCSCounter />
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>How to establish Girls Community School?</h2>
          </div>
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-3 col-md-3">
              <div className="icon-box text-center">
                <FaRegBuilding className="faIcon" />
                <h3>1. Identification</h3>
                <p>Village Indentification</p>
                <br />
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="icon-box text-center">
                <FaUsers className="faIcon" />
                <h3>2. Community Meetings</h3>
                <p>Corner / Broad based community meetings</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="icon-box text-center">
                <FaUserFriends className="faIcon" />
                <h3>3. Establishment of VEC</h3>
                <p>
                  i. Establishment of VEC
                  <br />
                  ii. Identification of Teacher
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="icon-box text-center">
                <FaMapPin className="faIcon" />
                <h3>4. School Location</h3>
                <p>
                  i. Location for school Identification
                  <br />
                  ii. Development of feasibility
                </p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="zoom-in mt-4">
            <div className="col-md-4 col-lg-4">
              <div className="icon-box text-center">
                <FaCheckSquare className="faIcon" />
                <h3>5. Approval</h3>
                <p>Scrutiny & Approval of Feasibility</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="icon-box text-center">
                <FaFileSignature className="faIcon" />
                <h3>6. Agreement</h3>
                <p>Signing of Agreement / School Functional</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="icon-box text-center">
                <FaEye className="faIcon" />
                <h3>7. Monitoring</h3>
                <p>Regular Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="criteria" className="criteria section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Establishment Criteria</h2>
            <p>For establishment of Girls Community School the criteria are:</p>
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
                  No government girls primary school at a radius of .75km in
                  plain area and 0.50 km in hilly area.
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
                <h4>Required Qualification</h4>
                <p>
                  Proposed teacher must be local with the qualification of
                  F.A/F.Sc. or equivalent.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <FaHome className="faIcon" />
                <h4>Space Allotment</h4>
                <p>Space will be provided by the community. </p>
              </div>
            </div>
            <div
              className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <FaUserCheck className="faIcon" />
                <h4>Required Enrollment</h4>
                <p>At least 25 enrollments are required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GCSpage;
