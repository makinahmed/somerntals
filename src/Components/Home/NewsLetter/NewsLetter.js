import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="news-letter-section">
      <Container className="news-letter-container">
        <Container>
          <Row className="g-3">
            <Col md={6}>
              <h3 className="news-letter-title ps-5">
                Subscribe our newsletter for future <br /> updates
              </h3>
            </Col>
            <Col md={6}>
              <div className="subscribe-container me-5">
                <div className="subscribe">
                  <input placeholder="Subscribe now.." />
                  <button>Subscribe</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default NewsLetter;
