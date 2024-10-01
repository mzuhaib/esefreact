import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL, COMPANY_NAME } from "../../constants.js";
import { API_BASE_URL } from "../../constants.js";
import Footer from "../../components/Footer";

const Bod = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Board of Directors | " + COMPANY_NAME;
    axios
      .get(API_BASE_URL + "bod_members") // Laravel API endpoint
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Set the fetched data
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Header />
      <section className="inner_page_no_bg bod_page">
        <Container>
          <div class="section-title">
            <h2>Board of Directors</h2>
            <p>
              Elementary &amp; Secondary Education Foundation, Khyber
              Pakhtunkhwa
            </p>
          </div>
          <Container>
            <Row className="justify-content-center">
              <Col md={4} className="d-flex text-center">
                <Card>
                  <Card.Img
                    variant="top"
                    src={BASE_URL + data[0].member_picture}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      {data[0].member_name}
                    </Card.Title>
                    <p
                      className="text-sm-center"
                      style={{ fontStyle: "italic" }}
                    >
                      {data[0].member_designation}
                    </p>
                    <Card.Text className="">{data[0].member_details}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              {data.slice(1).map((item) => (
                <Col md={4} className="d-flex text-center">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={BASE_URL + item.member_picture}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {item.member_name}
                      </Card.Title>
                      <p
                        className="text-sm-center"
                        style={{ fontStyle: "italic" }}
                      >
                        {item.member_designation}
                      </p>
                      <Card.Text className="">{item.member_details}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Bod;
