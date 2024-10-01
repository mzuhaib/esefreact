import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import GCSCounter from "../../components/GCSCounter";
import obj1 from "../../assets/images/obj1.png";
import obj2 from "../../assets/images/obj2.png";
import obj3 from "../../assets/images/obj3.png";
import obj4 from "../../assets/images/obj4.png";
import Footer from "../../components/Footer";
import { COMPANY_NAME } from "../../constants";

const Objectives = () => {
  useEffect(() => {
    document.title = "Objectives | " + COMPANY_NAME;
  });
  return (
    <>
      <Header />
      <section className="inner_page">
        <Container>
          <Row className="d-flex align-items-stretch">
            <Col md={5}>
              <div className="content">
                <h3>Objectives</h3>
                <p> • To improve basic Literacy.</p>
                <p>
                  {" "}
                  • To improve literacy rate, with particular focus on female,
                  through opening of community / non-formal schools and
                  employment of teachers.
                </p>
                <p>
                  {" "}
                  • Promotion of community participation and ownership of
                  elementary & secondary education program at grass root level.
                </p>
                <p>
                  {" "}
                  • To improve quality of education through engaging private
                  sector.
                </p>
                <p>
                  {" "}
                  • Education and skill oriented programs for disabled, retarded
                  and disadvantaged children.
                </p>
              </div>
            </Col>
            <Col md={7} className="d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <Row>
                  <Col md={6}>
                    <img src={obj1} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <img src={obj2} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <img src={obj3} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <img src={obj4} className="img-fluid" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <GCSCounter />
      <Footer />
    </>
  );
};

export default Objectives;
