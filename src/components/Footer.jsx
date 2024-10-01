import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import {
  COMP_ADDRESS1,
  COMP_ADDRESS2,
  COMP_EMAIL,
  COMP_PHONE,
  COMP_PHONE2,
  COMPANY_NAME,
} from "../constants";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <Container>
            <Row>
              <Col md={4}>
                <div className="footer-info">
                  <h3>{COMPANY_NAME}</h3>
                  <p>
                    {COMP_ADDRESS1}
                    <br />
                    {COMP_ADDRESS2} <br />
                    <br />
                    <br />
                    <strong>Phone:</strong> {COMP_PHONE}, {COMP_PHONE2}
                    <br />
                    <strong>Email:</strong> {COMP_EMAIL}
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a
                      href="https://twitter.com/esefkpk"
                      className="twitter"
                      target="_blank"
                    >
                      <FaTwitter color="#263f49" className="social-icon" />
                    </a>
                    <a
                      href="https://www.facebook.com/esefkpk"
                      className="facebook"
                      target="_blank"
                    >
                      <FaFacebook color="#263f49" className="social-icon" />
                    </a>
                    <a
                      href="https://www.instagram.com/esefkpk/"
                      className="instagram"
                      target="_blank"
                    >
                      <FaInstagram color="#263f49" className="social-icon" />
                    </a>
                    <a
                      href="https://youtube.com/channel/UCtd5nQpAiRk7-BBpr0n8_og"
                      className="youtube"
                      target="_blank"
                    >
                      <FaYoutube color="#263f49" className="social-icon" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={4} className="footer-links">
                <ul>
                  <li>
                    <h4>Our Services</h4>
                  </li>
                  <li>
                    <a href="">
                      <FaChevronRight /> Girls Community Schools
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4} className="footer-links">
                <ul>
                  <li>
                    <h4>Useful Links</h4>
                  </li>
                  <li>
                    <a href="">
                      <FaChevronRight /> Apply for GCS
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>Elementary &amp; Secondary Education Foundation.</strong>{" "}
            All Rights Reserved.
          </div>
          <div className="credits">
            Designed &amp; Developed by <a href="/">eGMC</a>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
