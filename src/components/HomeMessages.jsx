import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../constants.js";
import { API_BASE_URL } from "../constants.js";

const HomeMessages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "messages") // Laravel API endpoint
      .then((response) => {
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
    <Container className="">
      <div className="section-title text-center mt-5 mb-4">
        <h2>Messages</h2>
      </div>
      <Row>
        {data.map((item) => (
          <Col md={4} key={`msg_${item.id}`}>
            <Card>
              <Card.Img variant="top" src={BASE_URL + item.picture} />
              <Card.Body>
                <Card.Title className="text-center">{item.name}</Card.Title>
                <p className="text-sm-center" style={{ fontStyle: "italic" }}>
                  {item.designation}
                </p>
                <Card.Text className="text-italic-grey">
                  {item.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeMessages;
