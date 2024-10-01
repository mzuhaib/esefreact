import React, { useEffect, useState } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../constants.js";
import { API_BASE_URL } from "../constants.js";

const HomeNews = () => {
  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "home_news") // Laravel API endpoint
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
  const chunkedData = chunkArray(data, 3);
  return (
    <Container className="bg-light">
      <div className="section-title text-center mb-4">
        <h2>Latest News &amp; Updates</h2>
      </div>
      <Carousel className="d-flex">
        {chunkedData.map((chunk, chunkIndex) => (
          <Carousel.Item>
            <Row>
              {chunk.map((item, index) => (
                <Col key={`news_${index}`} md={4}>
                  <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>
                        <img
                          src={BASE_URL + item.picture}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </Card.Title>
                      <Card.Text>
                        {item.description.substring(0, 200)}
                      </Card.Text>
                      <a href={"/Media/NewsDetail/" + item.slug}>See more</a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeNews;
