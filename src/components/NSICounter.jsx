import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import CountUp from "react-countup";
import axios from "axios";

const NSICounter = () => {
  const [counterData, setCounterData] = useState({
    total_schools: 0,
    total_enrollment: 0,
    total_boys: 0,
    total_girls: 0,
  });
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://www.esef.gkp.pk/ess/api/get_data/statistics_for_website_nsi"
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
          <h2>New Schools Initiative (NSI)</h2>
          <p>
            The New Schools Initiative Scheme is a special initiative of the
            Government of Khyber Pakhtunkhwa with the objective of enrolling
            “out-of-school” children (OOSC) falling in the age bracket of 4-16.
            The scheme is for the areas where government is not providing
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

export default NSICounter;
