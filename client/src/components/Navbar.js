import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../utils/auth';
// import React from 'react';
import { useState } from 'react'; 


export default function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  // setLoggedIn((jwt) => !jwt);

  const handleMouseEnter = e => {
    e.target.style.background = "grey"
    e.target.style.color = "white"
    e.target.style.borderRadius = "15px"
  }
  const handleMouseLeave = e => {
    e.target.style.background = "inherit"
    e.target.style.color = "inherit"
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid className='px-4'>
      <Navbar.Brand href="/">Schedaddy</Navbar.Brand> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/schedule" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isAdmin ? 'Schedule' : 'My Schedule'}
            </Nav.Link>
          <Nav.Link href="/positions" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isAdmin ? 'Positions' : {display: 'none'}}
          </Nav.Link>
          <Nav.Link href="/employees" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isAdmin ? 'Employees' : {display: 'none'}}
          </Nav.Link>
          <Nav.Link href="/account" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Account</Nav.Link>
        </Nav>
        <Nav.Link href="/login" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{Auth.loggedIn() ? 'Login' : 'Logout'}</Nav.Link>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}


