import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assets/Images/logo.png";
import LanguageTranslate from "../LanguageTranslate/LanguageTranslate";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Navbar className="navigation-container" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img-fluid logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navigation-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#link">
                Properties
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#link">
                Blog
              </Nav.Link>
              <Nav.Link className="navigation-link" href="#link">
                Contact
              </Nav.Link>
              <div className="navigation-left-container">
                <LanguageTranslate />
                <button className="user-login-btn">User Login</button>
                <button className="owner-login-btn">Owner Login</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navigation;
