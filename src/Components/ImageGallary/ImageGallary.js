import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './ImageGallary.css';


export default function ImageGallary() {
  return (
    <section className="img-gallary">
      <Container className="gy-5">
        <Row>
          <Col xs={12} md={6} className="single-img">
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>DUBAI</h2>
                <a href="/">Explore</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>TURKEY</h2>
                <a href="/">Explore</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} md={4} className="single-img">
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>LANDON</h2>
                <a href="/">Explore</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>USA</h2>
                <a href="/">Explore</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>BANGKOK</h2>
                <a href="/">Explore</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,44,113,1) 35%, rgba(0,212,255,1) 100%);
// #002c7185
