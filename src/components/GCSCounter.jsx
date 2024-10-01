import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import axios from "axios";
import { BASE_URL } from "../constants.js";
import { API_BASE_URL } from "../constants.js";

const GCSCounter = () => {
  const [counterData, setCounterData] = useState({
    total_schools: 0,
    total_primary_schools: 0,
    total_middle_schools: 0,
    total_teachers: 0,
    total_enrollment: 0,
    total_boys: 0,
    total_girls: 0,
  });

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://www.esef.gkp.pk/gcs/api/get_data/statistics_for_website"
        ); // Replace with your API endpoint
        const data = response.data.data[0]; // Extracting the first object from the array
        setCounterData(data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-5 mb-5">
      <Container>
        <div className="text-center">
          <h2>Girls Community Schools (GCS)</h2>
          <p>
            The Elementary & Secondary Education Foundation establishes Girls
            Community Schools to serve "out-of-schools" children belonging to
            families lacking access to educational opportunities. These schools
            are established in those areas where government is not providing
            schooling facility.
          </p>
        </div>
        <Row className="no-gutters align-items-md-stretch text-center">
          <Col md={3}>
            <div className="count-box text-center">
              <FaSchool color="green" className="my-2 counter-icon" />
              <CountUp
                className="counter-val"
                start={0}
                end={counterData.total_schools}
                duration={1}
              />
              <p className="my-2">Total Schools</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="count-box text-center">
              <FaSchool color="green" className="my-2 counter-icon" />
              <CountUp
                className="counter-val"
                start={0}
                end={counterData.total_primary_schools}
                duration={1}
              />
              <p className="my-2">Primary Schools</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="count-box text-center">
              <FaSchool color="green" className="my-2 counter-icon" />
              <CountUp
                className="counter-val"
                start={0}
                end={counterData.total_middle_schools}
                duration={1}
              />
              <p className="my-2">Middle Schools</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="count-box text-center">
              <FaUsers color="green" className="my-2 counter-icon" />
              <CountUp
                className="counter-val"
                start={0}
                end={counterData.total_teachers}
                duration={1}
              />
              <p className="my-2">Total Teachers</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="count-box text-center">
              <FaFemale color="green" className="my-2 counter-icon" />
              <CountUp
                className="counter-val"
                start={0}
                end={counterData.total_girls}
                duration={1}
              />
              <p className="my-2">Total Girls</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="count-box text-center">
              <FaMale color="green" className="my-2 counter-icon" />
              <CountUp
                className="counter-val"
                start={0}
                end={counterData.total_boys}
                duration={1}
              />
              <p className="my-2">Total Boys</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="count-box text-center">
              <FaUserGraduate color="green" className="my-2 counter-icon" />
              <CountUp
                className="counter-val"
                start={0}
                end={counterData.total_enrollment}
                duration={1}
              />
              <p className="my-2">Total Enrollment</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GCSCounter;
