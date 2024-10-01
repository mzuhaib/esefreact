import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import {
  BASE_URL,
  COMP_ADDRESS1,
  COMP_ADDRESS2,
  COMP_EMAIL,
  COMP_PHONE,
  COMP_PHONE2,
  COMPANY_NAME,
} from "../constants.js";
import { API_BASE_URL } from "../constants.js";

const ContactUs = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "test",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("ddd", JSON.stringify(formData));
    try {
      const response = axios.post(
        "https://www.esef.gkp.pk/api/contactus_form",
        formData
      );
      console.log("Form Submitted Successfully");
      setSubmitted(true);
    } catch {
      console.log("Error in Form Submission");
    }
  }; //
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior

  //   // Log the form data before submission
  //   // console.log(formData);

  //   // Example of sending data to an API
  //   fetch(API_BASE_URL + "contactus_form", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //       setSubmitted(true); // Mark as submitted
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    document.title = "Contact Us | " + COMPANY_NAME;
    const fetchContacts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_BASE_URL + "telephone_book");
        setData(response.data);
      } catch {
        setError("Error Loading Data");
      }
      setLoading(false);
    };
    fetchContacts();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Header />
      <section className="inner_page_bg_clr pb-5 contactPage">
        <div className="section-title justify">
          <h2>Contact Us</h2>
          <p>
            Got a question? We would love to hear from you. Send us a message
            and we will respond as soon as possible.
          </p>
        </div>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="info-box mb-4">
                <FaMapMarkerAlt className="faIcon" />
                <h3>Our Address</h3>
                <p>{COMPANY_NAME}</p>
                <p>
                  {COMP_ADDRESS1} {COMP_ADDRESS2}
                </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12} xs={12}>
              <div className="info-box mb-4">
                <FaEnvelope className="faIcon" />
                <h3>Email Us</h3>
                <p>{COMP_EMAIL}</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12} xs={12}>
              <div className="info-box mb-4">
                <FaPhoneAlt className="faIcon" />
                <h3>Call Us</h3>
                <p>
                  {COMP_PHONE}, {COMP_PHONE2}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d827.2295881910459!2d71.420063!3d33.968938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9114763cbda15%3A0x5eea137b8822f05c!2sElementary%20and%20Secondary%20Education%20Foundation%20(ESEF)!5e0!3m2!1sen!2sus!4v1727158120277!5m2!1sen!2sus"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col md={6} sm={12}>
              <div className="section-title justify">
                <h2>Send us a message</h2>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-4">
                  <Col md={6} sm={12}>
                    <Form.Group>
                      <Form.Label>
                        Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Enter your name"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group>
                      <Form.Label>
                        Email <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md={12} sm={12}>
                    <Form.Group>
                      <Form.Label>
                        Subject <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        placeholder="Enter subject here"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md={12} sm={12}>
                    <Form.Group>
                      <Form.Label>
                        Message <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        rows={3}
                        placeholder="Enter your message here"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md={4}>&nbsp;</Col>
                  <Col md={4} className="text-center">
                    <Button type="submit" variant="success">
                      Send Message
                    </Button>
                  </Col>
                  <Col md={4}>&nbsp;</Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="inner_page_no_bg mt-0">
        <div className="section-title">
          <h2>Contacts Directory</h2>
        </div>
        <Container>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Designation</th>
                <th>Contact No</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.key}>
                  <td>{item.designation}</td>
                  <td>{item.telephone_no}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
