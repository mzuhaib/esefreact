import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { BASE_URL, COMPANY_NAME } from "../constants.js";
import { API_BASE_URL } from "../constants.js";

const Nfe = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    document.title = "Non Formal Education Summary | " + COMPANY_NAME;
    const fetchNfe = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_BASE_URL + "nfe");
        setData(response.data);
      } catch {
        setError("Error Loading Data");
      }
      setLoading(false);
    };
    fetchNfe();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Header />
      <section className="inner_page">
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </section>
      <Footer />
    </>
  );
};

export default Nfe;
