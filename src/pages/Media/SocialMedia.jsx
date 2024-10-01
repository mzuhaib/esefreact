import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import fbImg from "../../assets/images/fb.png";
import instaImg from "../../assets/images/insta.png";
import twitterImg from "../../assets/images/twitter.png";
import youtubeImg from "../../assets/images/youtube.png";

const SocialMedia = () => {
  useEffect(() => {
    document.title = "Social Media | " + COMPANY_NAME;
  });
  return (
    <>
      <Header />
      <section className="inner_page_no_bg">
        <div class="section-title">
          <h2>Social Media Links</h2>
          <p>For latest updates visit our social media links</p>
        </div>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={6} xs={12}>
              <div className="icon-box text-center">
                <h3>
                  <a href="https://www.facebook.com/esefkpk" target="_blank">
                    <img src={fbImg} alt="Facebook" className="img-fluid" />
                  </a>
                </h3>
                <p>Facebook</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <div className="icon-box text-center">
                <h3>
                  <a href="https://www.instagram.com/esefkpk/" target="_blank">
                    <img src={instaImg} alt="Instagram" className="img-fluid" />
                  </a>
                </h3>
                <p>Instagram</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <div className="icon-box text-center">
                <h3>
                  <a href="https://twitter.com/esefkpk" target="_blank">
                    <img src={twitterImg} alt="Twitter" className="img-fluid" />
                  </a>
                </h3>
                <p>Twitter</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <div className="icon-box text-center">
                <h3>
                  <a
                    href="https://youtube.com/channel/UCtd5nQpAiRk7-BBpr0n8_og"
                    target="_blank"
                  >
                    <img src={youtubeImg} alt="Youtube" className="img-fluid" />
                  </a>
                </h3>
                <p>Youtube</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default SocialMedia;
