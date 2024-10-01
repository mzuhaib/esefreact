import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeContact = () => {
  return (
    <section className="home_contact">
      <Container>
        <div className="text-center">
          <h3>Contact Us</h3>
          <p>
            Got a question? Send us a message at{" "}
            <strong>info@eef.org.pk</strong> and we will respond as soon as
            possible.
          </p>
          <a className="home_contact_btn" href="/Contact">
            Email Us Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HomeContact;
