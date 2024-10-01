import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { BASE_URL, COMPANY_NAME } from "../../constants.js";
import { API_BASE_URL } from "../../constants.js";

const Tenders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Tenders | " + COMPANY_NAME;
    axios
      .get(API_BASE_URL + "tenders") // Laravel API endpoint
      .then((response) => {
        setData(response.data); // Set the fetched data
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Header />
      <section className="inner_page_no_bg">
        <div className="section-title justify">
          <h2>Tenders</h2>
        </div>
        <Container>
          <Row>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th className="dateTd">Date</th>
                  <th className="titleTd">Title</th>
                  <th className="dateTd">Download</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                    <td>
                      <a href={`${BASE_URL + item.attachment}`} target="_blank">
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Tenders;
