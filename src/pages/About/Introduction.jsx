import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import GCSCounter from "../../components/GCSCounter";
import aboutImg from "../../assets/images/about_us_banner.png";
import Footer from "../../components/Footer";
import { COMPANY_NAME } from "../../constants";

const Introduction = () => {
  useEffect(() => {
    document.title = "Introduction | " + COMPANY_NAME;
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
                  " Elementary & Secondary Education Foundation Govt. of Khyber
                  Pakhtunkhwa (ESEF) is an autonomous body established under
                  “Khyber Pakhtunkhwa Elementary & Secondary Education
                  Foundation Ordinance No. XXX of 2002”. "
                </p>
                <p>
                  The main Objective of the Foundation is to take all such
                  measure as it deems necessary for the promotions, improvement
                  and financing of education development of human resource in
                  the Khyber Pakhtunkhwa Province through strengthening of
                  elementary & secondary education in the private sector in line
                  with the education policy of the Government of Khyber
                  Pakhtunkhwa.
                </p>
              </div>
            </Col>
            <Col md={6} className="about-img">
              <img src={aboutImg} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <GCSCounter />
      <Footer />
    </>
  );
};

export default Introduction;
