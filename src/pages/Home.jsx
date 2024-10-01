import React, { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import HomeAbout from "../components/HomeAbout";
import HomeNews from "../components/HomeNews";
import HomeMessages from "../components/HomeMessages";
import HomeSchemes from "../components/HomeSchemes";
import GCSCounter from "../components/GCSCounter";
import Footer from "../components/Footer";
import ESSCounter from "../components/ESSCounter";
import NSICounter from "../components/NSIcounter";
import HomeContact from "../components/HomeContact";
import { COMPANY_NAME } from "../constants";

const Home = () => {
  useEffect(() => {
    document.title = "Home | " + COMPANY_NAME;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <HomeAbout />
      <HomeNews />
      <HomeMessages />
      <HomeSchemes />
      <GCSCounter />
      <ESSCounter />
      <NSICounter />
      <HomeContact />
      <Footer />
    </>
  );
};

export default Home;
