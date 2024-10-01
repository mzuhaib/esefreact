import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FsLightbox from "fslightbox-react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL, COMPANY_NAME } from "../../constants.js";
import { API_BASE_URL } from "../../constants.js";

const Gallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  // const [toggler, setToggler] = useState(false);
  // const [lightboxController, setLightboxController] = useState({
  //   slide: 1,
  // });
  const [imageUrls, setImageUrls] = useState([]);

  // Function to fetch images from the API
  const fetchImages = async () => {
    try {
      const response = await fetch(API_BASE_URL + "gallery"); // Replace with your API URL
      const data = await response.json();
      const urls = data.map((item) => BASE_URL + item.picture); // Assuming 'image_url' is the key for your image links
      setImageUrls(urls);
      // console.log(imageUrls)
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Fetch the images on component mount
  useEffect(() => {
    document.title = "Gallery | " + COMPANY_NAME;
    fetchImages();
  }, []);
  const openLightboxAtIndex = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1, // FsLightbox slides start from 1, not 0
    });
  };
  return (
    <>
      <Header />
      <section className="inner_page_no_bg">
        <Container>
          <Row>
            {imageUrls.map((url, index) => (
              <Col
                md={4}
                sm={6}
                xs={12}
                key={index}
                className="gallery_item mb-3"
                style={{ gap: "10px" }}
              >
                <img
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                  onClick={() => openLightboxAtIndex(index)}
                />
              </Col>
            ))}
          </Row>
        </Container>

        <FsLightbox
          showThumbsOnMount={true}
          toggler={lightboxController.toggler}
          sources={imageUrls}
          slide={lightboxController.slide}
        />
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
