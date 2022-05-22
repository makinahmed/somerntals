import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import avatarOne from "../../../Assets/Images/avatar-1.png";
import avatarTwo from "../../../Assets/Images/avatar-2.png";
import "./HowItWorksBanner.css";

const HowItWorksBanner = () => {
  return (
    <section className="how-it-works-section my-5">
      <div className="how-it-works-banner"></div>
      <div className="avatar-one">
        <img src={avatarOne} alt="avatar" />
      </div>
      <div className="avatar-two">
        <img src={avatarTwo} alt="avatar" />
      </div>
      <div className="content-container">
        <div>
          <div className="content-top">
            <h6>How it Works</h6>
            <h2>
              Save Your Time &amp; enjoy Your <br /> Trip
            </h2>
          </div>
          <div className="content-bottom">
            <Container>
              <Row className="g-3">
                <Col
                  className="d-flex align-items-center justify-content-center"
                  md={3}
                >
                  <div className="circle">1</div>
                  <span className="circle-title">Create an account</span>
                </Col>
                <Col
                  className="d-flex align-items-center justify-content-center"
                  md={3}
                >
                  <div className="circle">2</div>
                  <span className="circle-title">Search desire hotel</span>
                </Col>
                <Col
                  className="d-flex align-items-center justify-content-center"
                  md={3}
                >
                  <div className="circle">3</div>
                  <span className="circle-title">Book the hotel</span>
                </Col>
                <Col
                  className="d-flex align-items-center justify-content-center"
                  md={3}
                >
                  <div className="circle">4</div>
                  <span className="circle-title">Enjoy your holiday</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBanner;
