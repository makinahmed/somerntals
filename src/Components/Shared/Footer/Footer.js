import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../Assets/Images/logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <footer className="footer">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <img className="img-fluid footer-logo" src={logo} alt="logo" />
              <p className="footer-left-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                tempore vel pariatur nesciunt laudantium assumenda minus quod
                aliquid tenetur tempora.
              </p>
            </Col>
            <Col md={2}>
              <h4 className="footer-title">Site Links</h4>
              <hr className="footer-hr" />
              <p className="footer-link">- Properties</p>
              <p className="footer-link">- Locations</p>
              <p className="footer-link">- Blog</p>
              <p className="footer-link">- Contact</p>
            </Col>
            <Col md={2}>
              <h4 className="footer-title">Important links</h4>
              <hr className="footer-hr" />
              <p className="footer-link">- Terms of Service</p>
              <p className="footer-link">- Privacy Policy</p>
              <p className="footer-link">- User Registration</p>
              <p className="footer-link">- Owner Registration</p>
            </Col>
            <Col md={4}>
              <h4 className="footer-title">Contact Info</h4>
              <hr className="footer-hr" />
              <p className="call-link">
                <FiPhoneCall className="call-icon" /> +123456789
              </p>
              <p className="address-link">
                <MdOutlineLocationOn className="footer-location-icon" /> 101
                Independence Avenue, S.E. Washington, D.C
              </p>
              <p className="email-link">
                <FiPhoneCall className="call-icon" /> demo@company.com
              </p>
              <div className="footer-social-icons">
                <div>
                  <FaLinkedinIn />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-bottom">
          <hr />
          <p>© 2022 HotelLab. All Right Reserved</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
