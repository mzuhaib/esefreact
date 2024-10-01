import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import axios from "axios";
import { BASE_URL } from "../constants.js";
import { API_BASE_URL } from "../constants.js";

const Banner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "all_banners") // Laravel API endpoint
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
    <section className="home_banner">
      <Carousel>
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <img src={BASE_URL + item.picture} className="img-fluid" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
  // }
};

export default Banner;
