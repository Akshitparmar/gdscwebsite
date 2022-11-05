import React from 'react'
import logo from "../assets/Images/logo.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../styles/Header.css";
function Header() {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-auto"
            
          />
          
        </Navbar.Brand>
        <div >
          <p className='logotext'>Google Developer Student Clubs SRM Ghaziabad </p>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button href="/" variant="custom" className="custom-btn">
              Home
            </Button>{" "}
            <Button href="/about" variant="custom" className="custom-btn">
              About Us
            </Button>{" "}
            <Button href="/team" variant="custom" className="custom-btn">
              Team
            </Button>{" "}
            <Button href="/contact" variant="custom" className="custom-btn">
              Contact Us
            </Button>{" "}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;