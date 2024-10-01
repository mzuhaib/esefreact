import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import { BASE_URL } from "../constants";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        // Change this value as per your requirement
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed-top header-transparent ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar expand="lg" className="navbar">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="ESEF Logo"
              className="img-fluid header-logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="/About/Introduction">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item href="/About/Objectives">
                  Objectives
                </NavDropdown.Item>
                <NavDropdown.Item href="/About/Bod">
                  Board of Directors
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Nfe">NFE</Nav.Link>
              <NavDropdown title="Schemes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Schemes/GCS">
                  Girls Community Schools (GCS)
                </NavDropdown.Item>
                <NavDropdown.Item href="/Schemes/ESS">
                  Education Support Scheme (ESS)
                </NavDropdown.Item>
                <NavDropdown.Item href="/Schemes/NSI">
                  New School Initiative (NSI)
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Media" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Media/SocialMedia">
                  Social Media
                </NavDropdown.Item>
                <NavDropdown.Item href="/Media/News">
                  News & Updates
                </NavDropdown.Item>
                <NavDropdown.Item href="/Media/Gallery">
                  Gallery
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Downloads" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Downloads/Tenders">
                  Tenders
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={`${BASE_URL}poha`} target="_blank">
                POHA
              </Nav.Link>
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
