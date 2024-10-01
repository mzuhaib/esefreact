import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL, BASE_URL, COMPANY_NAME } from "../../constants";

const NewsDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_BASE_URL}news_detail/${slug}`); // Fetch news by slug
        setNewsItem(response.data);
        document.title = response.data.title + " | " + COMPANY_NAME;
      } catch (err) {
        console.log(err);
        setError("Error fetching news item");
      }

      setLoading(false);
    };

    fetchNewsItem();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!newsItem) return <p>News item not found</p>;
  return (
    <>
      <Header />
      <section className="inner_page_no_bg">
        <div class="section-title justify">
          <h2>News Details</h2>
        </div>
        <Container>
          <h3>{newsItem.title}</h3>
          <p>
            <strong>Published Date: </strong>
            {newsItem.date}
          </p>
          <img src={BASE_URL + newsItem.picture} alt="" />
          <p className="mt-2 mb-4">{newsItem.description}</p>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default NewsDetail;
