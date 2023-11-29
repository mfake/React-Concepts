import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAdjust, faCode, faGear, faSun, faMoon, faSync } from '@fortawesome/free-solid-svg-icons';
import './ChangeColor.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className='text-center'>
        <p>Copyright © 2022 Dentread. All rights reserved. </p>
      </Container>
    </footer>
  );
};

function ChangeColor() {
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [initialColor, setColor] = useState("white");

  const ThemeDropdown = () => {
    return (
      <Dropdown.Menu className='d-flex p-1'>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faSun} onClick={ ()=>setColor("white")} />
        </Dropdown.Item>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faMoon} onClick={()=>setColor("black")} />
        </Dropdown.Item>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faSync} />
        </Dropdown.Item>
      </Dropdown.Menu>
    );
  };

  return (
    <>
      <div className='header'>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCode} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#menu1">Home</Nav.Link>
                <Nav.Link href="#menu2">About</Nav.Link>
                <Nav.Link href="#menu2">Services</Nav.Link>
              </Nav>
              <Nav className="ml-auto d-flex align-items-center">
                <Dropdown
                  onMouseEnter={() => setShowThemeDropdown(true)}
                  onMouseLeave={() => setShowThemeDropdown(false)}
                >
                  <Dropdown.Toggle variant="link" id="theme-dropdown">
                    <FontAwesomeIcon icon={faAdjust} />
                  </Dropdown.Toggle>
                  {showThemeDropdown && <ThemeDropdown />}
                </Dropdown>
                <Nav.Link href="#settings">
                  <FontAwesomeIcon icon={faGear} />
                </Nav.Link>
                <Nav.Link href="#profile">
                  <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="body d-flex flex-column" style={{ backgroundColor: initialColor, minHeight: '625px' }}></div>
      <div className="footer mt-auto"><Footer /></div>
    </>
  );
}

export default ChangeColor;
